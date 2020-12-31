import { css } from 'styled-components';

const colWidthMixin = ({ theme, ...rest }) =>
  Object.keys(theme.breakpoints).map(
    (breakpoint) =>
      rest[breakpoint] &&
      css`
        ${theme.breakpoints[breakpoint]} {
          width: ${rest[breakpoint]};
        }
      `
  );

export default colWidthMixin;
