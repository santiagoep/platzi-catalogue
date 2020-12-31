import PropTypes from 'prop-types';

const Slide = ({ children }) => <>{children}</>;

Slide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Slide;
