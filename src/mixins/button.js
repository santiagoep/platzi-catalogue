import { css } from 'styled-components';

const buttonMixin = ({ theme, fullWidth, centered }) => css`
  background: ${theme.colors.bg.tertiary};
  padding: ${theme.utils.spacing(3, 5)};
  border-radius: ${theme.borderRadius.medium};
  width: ${fullWidth ? '100%' : 'fit-content'};
  cursor: pointer;
  ${centered &&
  css`
    margin: ${theme.utils.spacing(0, 'auto')};
  `}
`;

export default buttonMixin;
