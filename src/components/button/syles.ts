import styled from 'styled-components';

export const Container = styled.button`
    background-color: var(--button);
    height: 3rem;
    outline: none;
    color: white;
    border: none;
    width: 12rem;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }
`;