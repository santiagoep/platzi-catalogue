import Image from 'next/image';
import PropTypes from 'prop-types';

const ProductImage = ({ src, alt, ...rest }) => (
  <Image
    quality={100}
    loading='lazy'
    layout='fill'
    objectFit='cover'
    src={src}
    alt={alt}
    {...rest}
  />
);

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

ProductImage.defaultProps = {
  alt: ''
};

export default ProductImage;
