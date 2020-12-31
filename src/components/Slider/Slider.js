import React from 'react';
import PropTypes from 'prop-types';
import SliderLib from 'react-slick';
/* DOCS: https://react-slick.neostack.com/docs/get-started/ */

import {
  StyledDots,
  StyledContainer,
  StyledPrevArrow,
  StyledNextArrow
} from './Slider.styled';
import Slide from './Slide/Slide';

const Slider = ({ children, nextArrow, prevArrow, appendDots, ...rest }) => {
  const renderDots = (dots) => <StyledDots>{dots}</StyledDots>;
  return (
    <StyledContainer>
      <SliderLib
        nextArrow={nextArrow || <StyledNextArrow />}
        prevArrow={prevArrow || <StyledPrevArrow />}
        appendDots={appendDots || renderDots}
        {...rest}
      >
        {children}
      </SliderLib>
    </StyledContainer>
  );
};

Slider.Slide = Slide;

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  nextArrow: PropTypes.element,
  prevArrow: PropTypes.element,
  appendDots: PropTypes.func
};

Slider.defaultProps = {
  nextArrow: undefined,
  prevArrow: undefined,
  appendDots: undefined
};

export default Slider;
