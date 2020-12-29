import { breakpointsValues } from '@constants/index';

export default {
  smallMobile: `@media only screen and (min-width: ${breakpointsValues.smallMobile}px)`,
  mobile: `@media only screen and (min-width: ${breakpointsValues.mobile}px)`,
  tablet: `@media only screen and (min-width: ${breakpointsValues.tablet}px)`,
  laptop: `@media only screen and (min-width: ${breakpointsValues.laptop}px)`,
  desktop: `@media only screen and (min-width: ${breakpointsValues.desktop}px)`,
  screen: `@media only screen and (min-width: ${breakpointsValues.screen}px)`
};
