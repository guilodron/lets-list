import styled from "styled-components";

export const Container = styled.div`
    /* height: 9rem; */
    padding: 1rem 2rem;
    background-color: ${props => props.color};
    border-radius: 5px;
    margin: 0 1rem;

    div {
        margin-bottom: 1rem;
    }

    div span {
        font-size: .8rem;
    }

    strong {
        font-size: 2.5rem;
        color: ${props => props.color!='var(--white)' ? 'white' : 'var(--text)'};
    }


`;