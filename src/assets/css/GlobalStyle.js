import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    *, *::after, *::before{
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 16px;
        font-family: 'Roboto Mono', sans-serif;
        margin: 0;
        padding: 0;
        background-color:#030303;
        overflow:hidden;
    }

    body::-webkit-scrollbar{
        background: transparent;
        width: 6px;
    }

    body::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 1000px;
    } 
    .whitespace{
        display: inline-block;
        width:15px;
    }
`;
