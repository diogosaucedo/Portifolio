import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    // Box-model
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    // Display
    font-family: 'Poppins', sans-serif;
    background-color: ${theme.colors.dark}; 
  }
  :root{
    font-size: 62.5%; // 1rem = 10px
  }
`;

export default GlobalStyle;