import React from 'react';
import PropTypes from 'prop-types';

import StyledContainer from './Container.styled';

const Container = ({
  centered,
  fluid,
  limit,
  relative,
  children,
  height,
  id
}) => (
  <StyledContainer
    id={id}
    centered={centered}
    fluid={fluid}
    limit={limit}
    relative={relative}
    height={height}
  >
    {children}
  </StyledContainer>
);

Container.propTypes = {
  centered: PropTypes.bool,
  fluid: PropTypes.bool,
  limit: PropTypes.bool,
  relative: PropTypes.bool,
  height: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Container.defaultProps = {
  centered: true,
  fluid: false,
  limit: false,
  relative: true,
  height: undefined,
  id: undefined
};

export default Container;
