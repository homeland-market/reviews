import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
    * {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;
        color: #221924;
        box-sizing: border-box;
    }
    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 25px;
        font-weight: 900;
        line-height: 1.25;
    }
    body {
        display: block;
        background-color: #f4f4f5;
        margin: 0;
        padding: 0;
    `;

export default GlobalStyle;
