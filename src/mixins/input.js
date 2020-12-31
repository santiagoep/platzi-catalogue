import { css } from 'styled-components';

const inputMixin = css`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: fill-available;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  padding: ${({ theme }) => theme.utils.spacing(2, 8, 2, 2)};
  color: ${({ theme }) => theme.colors.font.primary};
  appearance: none;
  margin-bottom: ${({ theme }) => theme.utils.spacing(3)};
`;

export default inputMixin;
