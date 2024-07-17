import './App.css';
import { useTonConnect } from '../hooks/useTonConnect';
import styled from 'styled-components';
import { Header } from '@/widgets';
import { Content } from '@/widgets/content/ui/Content';

const UserView = styled.section`
    height: 100vh;
    padding: 5px 40px;
    display: flex;
    flex-direction: column;
`;

function App() {
    const { network } = useTonConnect();
    console.log(network);

    return (
        <UserView>
            <Header />
            <Content />
        </UserView>
    );
}

export default App;
