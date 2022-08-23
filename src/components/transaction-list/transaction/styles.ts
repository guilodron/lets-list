import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 1rem 2rem;
    margin: .5rem 0;
    strong {
        flex: 4;
    }

    .value {
        flex: 1;
    }

    .category {
        flex: 1;
    }
`;