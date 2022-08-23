import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--accent);
    height: 13rem;
    padding: 2rem 1rem 0 1rem;
    div {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        color: white;
    }
`;