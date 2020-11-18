import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // Font
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;500&display=swap');
  
  // Reset
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: rgb(214, 214, 214);
    background-color: #1c1c1c;
  }

  body, button {
    font-family: 'Playfair Display', Georgia, serif;
  }

  #root {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
