import spacing from '../core/utils';
import breakpoints from '../core/breakpoints';

export default {
  font: {
    family: {
      primary: "'Lato', sans-serif"
    },
    size: {
      h1: '3.75rem',
      h2: '3rem',
      h3: '2.5rem',
      h4: '2.25rem',
      h5: '1.625rem',
      h6: '1.5rem',
      subtitle1: '1.1375rem',
      subtitle2: '1.25rem',
      subtitle3: '1.375rem',
      paragraph1: '1.125rem',
      paragraph2: '1rem',
      paragraph3: '0.875rem',
      caption: '0.75rem',
      help: '0.625em',
      small: '0.5rem'
    },
    letterSpacing: {
      medium: '0.5rem',
      normal: '0rem'
    },
    lineHeight: {
      medium: '0.6rem',
      normal: 'normal'
    }
  },
  transitions: {
    button:
      'background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease'
  },
  zIndex: {
    initial: 0,
    backward: -1,
    forward: 1,
    fixed: 2,
    higher: 3,
    super: 100
  },
  borderRadius: {
    none: 'unset',
    button: '100px',
    small: '3px',
    medium: '8px',
    large: '18px',
    total: '50%'
  },

  containerWidth: {
    smallMobile: { width: '92%', maxWidth: '92%' },
    mobile: { width: '92%', maxWidth: '92%' },
    tablet: { width: '85%', maxWidth: '85%' },
    desktop: { width: '85%', maxWidth: '85%' },
    screen: { width: '75%', maxWidth: '75%' },
    limitFluid: { width: '100%', maxWidth: '1920px' },
    fluid: { width: '100%', maxWidth: '100%' }
  },
  utils: {
    spacing
  },
  breakpoints
};
