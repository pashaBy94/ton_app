import { useAsyncInitialize } from './useAsyncInitialazy';
import { useTonClient } from './useTonClient';
import { useTonConnect } from './useTonConnect';
import { SampleJetton } from './../wrappers/SampleJetton';
import { Address, fromNano, OpenedContract } from 'ton-core';
import { JettonDefaultWallet } from '@/wrappers/SampleJettonWallet';
import { useEffect, useState } from 'react';

export function useJetonContract() {
    const { client } = useTonClient();
    const { wallet } = useTonConnect();
    const [balance, setBalance] = useState<string>();

    const jettonContract = useAsyncInitialize(async () => {
        if (!client || !wallet) return;

        const contract = SampleJetton.fromAddress(
            Address.parse('EQB8StgTQXidy32a8xfu7j4HMoWYV0b0cFM8nXsP2cza_b7Y'),
        );

        return client.open(contract) as OpenedContract<SampleJetton>;
    }, [client, wallet]);

    const jettonWalletContract = useAsyncInitialize(async () => {
        if (!jettonContract || !client) return;

        const jettonWalletAddress = await jettonContract.getGetWalletAddress(
            Address.parse(Address.parse(wallet!).toString()),
        );

        return client.open(JettonDefaultWallet.fromAddress(jettonWalletAddress));
    }, [jettonContract, client]);
    useEffect(() => {
        async function getBalance() {
            if (!jettonWalletContract) return;
            const balance = (await jettonWalletContract?.getGetWalletData()).balance;
            setBalance(fromNano(balance));
        }
        getBalance();
    });
    return {
        jettonWalletAddress: jettonWalletContract?.address.toString(),
        balance,
    };
}
