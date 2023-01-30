import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('../asset/fonts/AppleSDGothicNeoL.ttf' format('ttf'));
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('../asset/fonts/AppleSDGothicNeoR.ttf' format('ttf'));
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('../asset/fonts/AppleSDGothicNeoM.ttf' format('ttf'));
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('../asset/fonts/AppleSDGothicNeoB.ttf' format('ttf'));
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSans';
    src: local('../asset/fonts/NotoSans-Thin.ttf' format('ttf'));
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSans';
    src: local('../asset/fonts/NotoSans-Light.ttf' format('ttf'));
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSans';
    src: local('../asset/fonts/NotoSans-Regular.ttf' format('ttf'));
    font-weight: 500;
    font-display: swap;
  }  

  @font-face {
    font-family: 'NotoSans';
    src: local('../asset/fonts/NotoSans-Medium.ttf' format('ttf'));
    font-weight: 600;
    font-display: swap;
  } 

  @font-face {
    font-family: 'NotoSans';
    src: local('../asset/fonts/NotoSans-SemiBold.ttf' format('ttf'));
    font-weight: 600;
    font-display: swap;
  } 

  @font-face {
    font-family: 'NotoSans';
    src: local('../asset/fonts/NotoSans-Bold.ttf' format('ttf'));
    font-weight: 700;
    font-display: swap;
  } 

  @font-face {
    font-family: 'testFont';
    src: url('../asset/fonts/Unbounded-SemiBold.ttf');
    font-weight: 700;
    font-display: swap;
  } 

  body {
    font-family: 'testFont';
    line-height: 1.5;
  }
`;

export default GlobalStyle;
