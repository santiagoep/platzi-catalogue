import { css } from 'styled-components';

const typographyMixin = ({
  theme,
  type,
  color,
  textAlign,
  fontWeight,
  fontFamily,
  textStyle,
  textDecoration,
  textTransform,
  letterSpacing,
  lineHeight,
  hoverColor
}) => css`
  margin: 0;
  padding: 0;
  font-size: ${theme.font.size[type]};
  color: ${theme.colors.font[color]};
  font-size: ${textStyle};
  text-align: ${textAlign};
  font-weight: ${fontWeight};
  font-family: ${theme.font.family[fontFamily]};
  text-decoration: ${textDecoration};
  text-transform: ${textTransform};
  letter-spacing: ${theme.font.letterSpacing[letterSpacing]};
  line-height: ${theme.font.lineHeight[lineHeight]};
  &:hover {
    color: ${hoverColor
      ? theme.colors.font[hoverColor]
      : theme.colors.font[color]};
  }
`;

export default typographyMixin;
