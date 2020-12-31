import styled, { css } from 'styled-components';

const rowHeightMixin = ({ theme, ...rest }) =>
  Object.keys(theme.breakpoints).map(
    (breakpoint) =>
      rest[breakpoint] &&
      css`
        ${theme.breakpoints[breakpoint]} {
          height: ${rest[breakpoint]};
        }
      `
  );

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  ${rowHeightMixin}
`;
