import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.text};
    background-color: #f9f5eb;
    line-height: 1.6;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyle;
