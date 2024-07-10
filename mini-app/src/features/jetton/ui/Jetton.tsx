import { useTonConnect } from '@/hooks/useTonConnect';
import { ButtonStyle } from '@/shared/styles/components/ButtonStyle';
import styled from 'styled-components';
import { Address } from 'ton-core';

const JettonStyle = styled.div`
    border-radius: var(--radius-second);
    box-shadow: 0 3px 4px 1px var(--shadow-block);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    min-height: 400px;
`;
const JettonHeaderStyle = styled.h3`
    color: var(--color-title);
`;
const JettonAddressStyle = styled.h3`
    color: var(--color-text);
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
`;

export function Jetton() {
    const { wallet, connected } = useTonConnect();
    console.log(wallet?.length);

    return (
        <JettonStyle>
            <JettonHeaderStyle>Jetton</JettonHeaderStyle>
            <JettonAddressStyle>
                Wallet: {wallet ? Address.parse(wallet as string).toString() : ''}
            </JettonAddressStyle>
            <ButtonStyle disabled={!connected}>Mint</ButtonStyle>
        </JettonStyle>
    );
}
