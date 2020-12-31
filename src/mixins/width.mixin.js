import { css } from 'styled-components';

const widthMixin = ({ width }) =>
  width &&
  css`
    width: ${width};
  `;

export default widthMixin;
