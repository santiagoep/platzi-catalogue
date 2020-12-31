import PropTypes from 'prop-types';

import StyledRow from './Row.styled';

const Row = ({ children }) => <StyledRow>{children}</StyledRow>;

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Row;
