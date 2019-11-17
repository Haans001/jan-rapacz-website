import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 16px;
        font-family: 'Roboto Mono', sans-serif;
        margin: 0;
        padding: 0;
    }
`;
