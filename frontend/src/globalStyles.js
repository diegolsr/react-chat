import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #000000;
    --gray-300: #c4c4cc;
    --gray-900: #121214;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
 
  body {
    background: var(--gray-900);
    color: var(--gray-900);
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  html, body, #root {
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
