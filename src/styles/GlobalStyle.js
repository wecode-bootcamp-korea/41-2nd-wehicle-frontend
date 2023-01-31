import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AppleSDGothicNeoL from '../asset/fonts/AppleSDGothicNeoL.ttf';
import AppleSDGothicNeoR from '../asset/fonts/AppleSDGothicNeoR.ttf';
import AppleSDGothicNeoM from '../asset/fonts/AppleSDGothicNeoM.ttf';
import AppleSDGothicNeoB from '../asset/fonts/AppleSDGothicNeoB.ttf';
import NotoSansThin from '../asset/fonts/NotoSans-Thin.ttf';
import NotoSansLight from '../asset/fonts/NotoSans-Light.ttf';
import NotoSansRegular from '../asset/fonts/NotoSans-Regular.ttf';
import NotoSansMedium from '../asset/fonts/NotoSans-Medium.ttf';
import NotoSansSemibold from '../asset/fonts/NotoSans-SemiBold.ttf';
import NotoSansBold from '../asset/fonts/NotoSans-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: url(${AppleSDGothicNeoL}) format('ttf');
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: url(${AppleSDGothicNeoR}) format('ttf');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: url(${AppleSDGothicNeoM}) format('ttf');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: url(${AppleSDGothicNeoB}) format('ttf');
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansThin}) format('ttf');
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansLight}) format('ttf');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansRegular}) format('ttf');
    font-weight: 500;
    font-display: swap;
  }  

  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansMedium}) format('ttf');
    font-weight: 600;
    font-display: swap;
  } 

  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansSemibold}) format('ttf');
    font-weight: 600;
    font-display: swap;
  } 

  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansBold}) format('ttf');
    font-weight: 700;
    font-display: swap;
  } 

  body {
    font-family: 'AppleSDGothicNeo';
    line-height: 1.5;
  }
`;

export default GlobalStyle;
