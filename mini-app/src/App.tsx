import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import './App.css';
import { useTonConnect } from './hooks/useTonConnect';
import styled from 'styled-components';

const DivContainer = styled.div`
    border: 1px solid green;
    border-radius: 40px;
    margin: 30px;
    padding: 30px;
`;

function App() {
    const { network } = useTonConnect();
    console.log(network);

    return (
        <>
            <TonConnectButton />
            <DivContainer>
                {network ? (network == CHAIN.MAINNET ? 'mainnet' : 'testnet') : 'N/A'}
            </DivContainer>
        </>
    );
}

export default App;
