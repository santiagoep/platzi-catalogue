import React from 'react';
import PropTypes from 'prop-types';

import StyledLine from './FancyLine.styled';

const FancyLine = ({ height, lineColor, ...rest }) => (
  <StyledLine {...rest} height={height} lineColor={lineColor} />
);

FancyLine.propTypes = {
  height: PropTypes.string,
  lineColor: PropTypes.string
};

FancyLine.defaultProps = {
  height: '1px',
  lineColor: 'secondary'
};

export default FancyLine;
