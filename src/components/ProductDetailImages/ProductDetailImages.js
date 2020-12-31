import { useMemo } from 'react';
import PropTypes from 'prop-types';

import Slider from '@components/Slider/Slider';
import ProductDetailImage from '@components/ProductDetailImage/ProductDetailImage';

const sliderConfig = {
  dots: true,
  infinite: true,
  fade: true,
  lazyLoad: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true
};

const ProductDetailImages = ({ images }) => {
  const memoizedSlides = useMemo(
    () =>
      images.map((image, index) => (
        <Slider.Slide key={`image-slide-${index}`}>
          <ProductDetailImage {...image} />
        </Slider.Slide>
      )),
    [images]
  );
  return <Slider {...sliderConfig}>{memoizedSlides}</Slider>;
};

ProductDetailImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object)
};

ProductDetailImages.defaultProps = {
  images: []
};

export default ProductDetailImages;
