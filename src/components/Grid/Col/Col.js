import StyledCol from './Col.styled';

const Col = ({ children, ...rest }) => (
  <StyledCol {...rest}>{children}</StyledCol>
);

export default Col;
