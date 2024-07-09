import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background-color: ${props =>
        props.disabled ? 'var(--background-button-disabled)' : 'var(--background-button)'};
    border-radius: var(--radius-second);
    border: 1px solid transparent;
    box-shadow: 0 3px 4px 1px var(--shadow-block);
    padding: 10px 30px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    transition: 0.3s;

    &:hover {
        scale: ${props => (props.disabled ? '1' : '1.05')};
        background-color: ${props =>
            props.disabled
                ? 'var(--background-button-disabled)'
                : 'var(--background-button-hover)'};
        cursor: pointer;
    }
`;
