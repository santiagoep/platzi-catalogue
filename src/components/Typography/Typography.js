import PropTypes from 'prop-types';

import StyledTypography from './Typography.styled';
import { typeEquivalences } from '@constants/index';

const Typography = ({ children, type, as, ...rest }) => (
  <StyledTypography as={as || typeEquivalences[type]} type={type} {...rest}>
    {children}
  </StyledTypography>
);

Typography.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  fontStyle: PropTypes.oneOf(['normal', 'italic', 'oblique']),
  fontFamily: PropTypes.oneOf(['primary', 'secondary']),
  fontWeight: PropTypes.oneOf([
    'lighter',
    'normal',
    'bold',
    'bolder',
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ]),
  id: PropTypes.string,
  letterSpacing: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  lineHeight: PropTypes.oneOf(['small', 'normal', 'medium', 'large', 'button']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  textDecoration: PropTypes.oneOf([
    'line-through',
    'underline',
    'overline',
    'none'
  ]),
  textTransform: PropTypes.oneOf([
    'uppercase',
    'lowercase',
    'capitalize',
    'none'
  ]),
  type: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'paragraph1',
    'paragraph2',
    'paragraph3',
    'paragraph4',
    'help',
    'small'
  ]),
  hoverColor: PropTypes.string
};

Typography.defaultProps = {
  as: undefined,
  id: undefined,
  color: 'primary',
  fontFamily: 'primary',
  className: 'typography',
  textAlign: undefined,
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 'normal',
  type: 'paragraph1',
  textTransform: 'none',
  textDecoration: 'none',
  letterSpacing: 'normal',
  hoverColor: undefined
};

export default Typography;
