import base from './base';
import colors from '../core/colors';
import { themes } from '@constants/index';

export default {
  ...base,
  name: themes.LIGHT,
  colors: {
    separator: {
      primary: colors.cadetBlue,
      secondary: colors.cerulean
    },
    border: {
      primary: colors.cadetBlue,
      secondary: colors.white
    },
    bg: {
      primary: colors.blumineDegree,
      secondary: colors.white,
      tertiary: colors.cerulean,
      quaternary: colors.blackSqueeze
    },
    font: {
      primary: colors.bigStone,
      secondary: colors.atlantis,
      tertiary: colors.white,
      quaternary: colors.cadetBlue
    }
  },
  boxShadows: {
    main: `1px 2px 4px 0 ${colors.matisse16}`,
    secondary: `0 0 0 1px ${colors.cerulean}`
  }
};
