import PropTypes from 'prop-types';

import StyledCol from './Col.styled';

const Col = ({ children, ...rest }) => (
  <StyledCol {...rest}>{children}</StyledCol>
);

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Col;
