import { css } from 'styled-components';

const relativeMixin = ({ relative }) =>
  relative
    ? css`
        position: relative;
      `
    : '';

export default relativeMixin;
