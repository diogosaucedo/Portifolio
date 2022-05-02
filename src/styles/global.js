import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: ${theme.colors.dark}; 
  }
  :root{
    font-size: 62.5%;
  }
`;

export default GlobalStyle;