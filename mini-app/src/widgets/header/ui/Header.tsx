import { useTonConnect } from '@/hooks/useTonConnect';
import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import styled from 'styled-components';
import st from './Header.module.css';

const HintStyle = styled.div`
    border: 1px solid rgb(255, 148, 241);
    border-radius: 20px;
    padding: 6px 10px;
    background-color: var(--background-second);
    color: white;
`;
const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 3px 1px var(--shadow-widget);
    border-radius: 50px;
    padding: 30px 40px;
    margin-bottom: 30px;
`;
const HeaderRightStyle = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;
const HeaderLefttStyle = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export function Header() {
    const { network } = useTonConnect();
    console.log(network);
    return (
        <HeaderStyle>
            <HeaderLefttStyle>
                <img src="/vite.svg" alt="Icon" />
            </HeaderLefttStyle>
            <HeaderRightStyle>
                <HintStyle>
                    {network ? (network == CHAIN.MAINNET ? 'mainnet' : 'testnet') : 'N/A'}
                </HintStyle>
                <TonConnectButton className={st.button} />
            </HeaderRightStyle>
        </HeaderStyle>
    );
}
