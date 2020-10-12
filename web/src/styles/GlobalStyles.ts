import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  }

  body,input,button,textarea {
    font: 600 18px Nunito, sans-serif;
  }
`;
