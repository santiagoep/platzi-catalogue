import Image from 'next/image';
import PropTypes from 'prop-types';

import StyledContainer from './ProductDetailImage.styled';

const ProductDetailImage = ({ src, alt, ...rest }) => (
  <StyledContainer>
    <Image
      quality={100}
      loading='eager'
      layout='fill'
      objectFit='cover'
      priority
      src={src}
      alt={alt}
      {...rest}
    />
  </StyledContainer>
);

ProductDetailImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

ProductDetailImage.defaultProps = {
  alt: ''
};

export default ProductDetailImage;
