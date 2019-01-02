import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  body {
    padding-left: 150px;
    width: 50%;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export default GlobalStyle;
