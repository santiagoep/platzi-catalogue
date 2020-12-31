import { css } from 'styled-components';

const heightMixin = ({ height }) =>
  height
    ? css`
        height: ${height};
      `
    : '';

export default heightMixin;
