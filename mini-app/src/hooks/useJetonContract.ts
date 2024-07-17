import { useAsyncInitialize } from "./useAsyncInitialazy";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { SampleJetton } from "./../wrappers/SampleJetton";
import { Address, OpenedContract } from "ton-core";
import { JettonDefaultWallet } from "@/wrappers/SampleJettonWallet";

export function useJetonContract(){
    const { client } = useTonClient();
    const { wallet } = useTonConnect();
    const jettonContract = useAsyncInitialize(async()=>{
        if(!client || !wallet) return;

        const contract = SampleJetton.fromAddress(Address.parse("0QB5kswttPSmPMqI_SJK-2WOdiQkdjS54VBoeDi8GNrCua4a"))

        return client.open(contract) as OpenedContract<SampleJetton>
    }, [client, wallet])

    const jettonWalletContract = useAsyncInitialize(async()=>{
        if(!jettonContract || !client) return;

        const jettonWalletAddress = await jettonContract.getGetWalletAddress(
            Address.parse(Address.parse(wallet!).toString())
        )

        return client.open(JettonDefaultWallet.fromAddress(jettonWalletAddress))
    }, [jettonContract, client])

    return {jetonWalletContract: jettonWalletContract?.address.toString()}
}