import PropTypes from 'prop-types';

import StyledFakeButton from './Fakebutton.styled';

const FakeButton = ({ children, ...rest }) => (
  <StyledFakeButton {...rest}>{children}</StyledFakeButton>
);

FakeButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default FakeButton;
