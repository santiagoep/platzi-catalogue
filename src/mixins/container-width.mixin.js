import { css } from 'styled-components';

import fluidMixin from '@mixins/container-fluid.mixin';

const containerWidthMixin = ({ theme }) => css`
  width: ${theme.containerWidth.smallMobile.width};
  max-width: ${theme.containerWidth.smallMobile.maxWidth};
  ${fluidMixin}
  ${theme.breakpoints.mobile} {
    width: ${theme.containerWidth.mobile.width};
    max-width: ${theme.containerWidth.mobile.maxWidth};
    ${fluidMixin}
  }
  ${theme.breakpoints.tablet} {
    width: ${theme.containerWidth.tablet.width};
    max-width: ${theme.containerWidth.tablet.maxWidth};
    ${fluidMixin}
  }
  ${theme.breakpoints.desktop} {
    width: ${theme.containerWidth.desktop.width};
    max-width: ${theme.containerWidth.desktop.maxWidth};
    ${fluidMixin}
  }
  ${theme.breakpoints.screen} {
    width: ${theme.containerWidth.screen.width};
    max-width: ${theme.containerWidth.screen.maxWidth};
    ${fluidMixin}
  }
`;

export default containerWidthMixin;
