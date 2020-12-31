import { css } from 'styled-components';

const centeredMixin = ({ centered }) =>
  centered
    ? css`
        margin: 0 auto;
      `
    : '';

export default centeredMixin;
