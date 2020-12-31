import { css } from 'styled-components';

const containerFluidMixin = ({ fluid, limit, theme }) => {
  if (fluid && !limit) {
    return css`
      width: ${theme.containerWidth.fluid.width};
      max-width: ${theme.containerWidth.fluid.maxWidth};
    `;
  } else if (fluid && limit) {
    return css`
      width: ${theme.containerWidth.limitFluid.width};
      max-width: ${theme.containerWidth.limitFluid.maxWidth};
    `;
  }
  return '';
};

export default containerFluidMixin;
