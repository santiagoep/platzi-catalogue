import { createGlobalStyle } from 'styled-components';

import latoBoldTtf from '@assets/fonts/lato/Lato-Bold.ttf';
import latoThinTtf from '@assets/fonts/lato/Lato-Thin.ttf';
import latoBlackTtf from '@assets/fonts/lato/Lato-Black.ttf';
import latoLightTtf from '@assets/fonts/lato/Lato-Light.ttf';
import latoItalicTtf from '@assets/fonts/lato/Lato-Italic.ttf';
import latoRegularTtf from '@assets/fonts/lato/Lato-Regular.ttf';
import latoThinItalicTtf from '@assets/fonts/lato/Lato-ThinItalic.ttf';
import latoBoldItalicTtf from '@assets/fonts/lato/Lato-BoldItalic.ttf';
import latoLightItalicTtf from '@assets/fonts/lato/Lato-LightItalic.ttf';
import latoBlackItalicTtf from '@assets/fonts/lato/Lato-BlackItalic.ttf';
import latoBoldWoff from '@assets/fonts/lato/Lato-Bold.woff';
import latoThinWoff from '@assets/fonts/lato/Lato-Thin.woff';
import latoBlackWoff from '@assets/fonts/lato/Lato-Black.woff';
import latoLightWoff from '@assets/fonts/lato/Lato-Light.woff';
import latoItalicWoff from '@assets/fonts/lato/Lato-Italic.woff';
import latoRegularWoff from '@assets/fonts/lato/Lato-Regular.woff';
import latoThinItalicWoff from '@assets/fonts/lato/Lato-ThinItalic.woff';
import latoBoldItalicWoff from '@assets/fonts/lato/Lato-BoldItalic.woff';
import latoLightItalicWoff from '@assets/fonts/lato/Lato-LightItalic.woff';
import latoBlackItalicWoff from '@assets/fonts/lato/Lato-BlackItalic.woff';
import latoBoldWoff2 from '@assets/fonts/lato/Lato-Bold.woff2';
import latoThinWoff2 from '@assets/fonts/lato/Lato-Thin.woff2';
import latoBlackWoff2 from '@assets/fonts/lato/Lato-Black.woff2';
import latoLightWoff2 from '@assets/fonts/lato/Lato-Light.woff2';
import latoItalicWoff2 from '@assets/fonts/lato/Lato-Italic.woff2';
import latoRegularWoff2 from '@assets/fonts/lato/Lato-Regular.woff2';
import latoThinItalicWoff2 from '@assets/fonts/lato/Lato-ThinItalic.woff2';
import latoBoldItalicWoff2 from '@assets/fonts/lato/Lato-BoldItalic.woff2';
import latoLightItalicWoff2 from '@assets/fonts/lato/Lato-LightItalic.woff2';
import latoBlackItalicWoff2 from '@assets/fonts/lato/Lato-BlackItalic.woff2';

const BaseStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${latoBoldWoff2}) format('woff2'),
          url(${latoBoldWoff}) format('woff'),
          url(${latoBoldTtf}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${latoThinWoff2}) format('woff2'),
          url(${latoThinWoff}) format('woff'),
          url(${latoThinTtf}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${latoBlackWoff2}) format('woff2'),
          url(${latoBlackWoff}) format('woff'),
          url(${latoBlackTtf}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${latoLightWoff2}) format('woff2'),
          url(${latoLightWoff}) format('woff'),
          url(${latoLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
 /*  @font-face {
    font-family: 'Lato';
    src: url(${latoItalicWoff2}) format('woff2'),
          url(${latoItalicWoff}) format('woff'),
          url(${latoItalicTtf}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  } */
  @font-face {
    font-family: 'Lato';
    src: url(${latoRegularWoff2}) format('woff2'),
          url(${latoRegularWoff}) format('woff'),
          url(${latoRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* @font-face {
    font-family: 'Lato';
    src: url(${latoThinItalicWoff2}) format('woff2'),
          url(${latoThinItalicWoff}) format('woff'),
          url(${latoThinItalicTtf}) format('truetype');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${latoBoldItalicWoff2}) format('woff2'),
          url(${latoBoldItalicWoff}) format('woff'),
          url(${latoBoldItalicTtf}) format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${latoLightItalicWoff2}) format('woff2'),
          url(${latoLightItalicWoff}) format('woff'),
          url(${latoLightItalicTtf}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${latoBlackItalicWoff2}) format('woff2'),
          url(${latoBlackItalicWoff}) format('woff'),
          url(${latoBlackItalicTtf}) format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }
 */

  /* Normalize */

  * {
    font-family: ${({ theme }) => theme.font.family.primary};
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.bg.quaternary};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  ol, ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* NPROGRESS */
  #nprogress {
  pointer-events: none;
  }

  #nprogress .bar {
    background: #29d;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default BaseStyles;
