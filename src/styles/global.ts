import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --light-text: #363F5F;
        --text: #363F5F;
        --button: #6933FF;
        --accent: #5429CC;
        --green: #33CC95;
        --background: #F0F2F5;
        --white: #ffffff;
    }

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background: var(--background);
        box-sizing: border-box;
        font-family: sans-serif;
    }
`;
