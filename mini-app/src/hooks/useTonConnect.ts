import { CHAIN, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { Address, Sender, SenderArguments } from 'ton-core';

export function useTonConnect(): {
    sender?: Sender;
    connected?: boolean;
    wallet: string | null;
    network?: CHAIN | null;
} {
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();
    // console.log('WALLET', wallet);
    // console.log('TONCONNECTUI', tonConnectUI);

    return {
        wallet: wallet?.account.address || null,
        sender: {
            send: async function (args: SenderArguments) {
                tonConnectUI.sendTransaction({
                    messages: [
                        {
                            address: args.to.toString(),
                            amount: args.value.toString(),
                            payload: args.body?.toBoc().toString(),
                        },
                    ],
                    validUntil: Math.floor(Date.now() / 1000) + 60,
                });
                return;
            },
            address: wallet?.account.address
                ? Address.parse(wallet?.account.address as string)
                : undefined,
        },
        connected: wallet?.account.address ? true : false,
        network: wallet?.account.chain,
    };
}
