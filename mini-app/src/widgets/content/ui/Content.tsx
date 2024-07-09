import { Jetton } from '@/features';
import styled from 'styled-components';

const ContainerStyle = styled.section`
    padding: 30px 40px;
    display: flex;
    border-radius: var(--radius-first);
    box-shadow: 0 3px 3px 1px var(--shadow-widget);
    height: 100vh;
`;

export function Content() {
    return (
        <ContainerStyle>
            <Jetton />
        </ContainerStyle>
    );
}
