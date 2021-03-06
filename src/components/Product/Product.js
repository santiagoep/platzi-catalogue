import PropTypes from 'prop-types';

import Link from '@components/Link/Link';
import formatCurrency from '@utils/numbers';
import FancyLine from '@components/FancyLine/FancyLine';
import Typography from '@components/Typography/Typography';
import FakeButton from '@components/FakeButton/FakeButton';
import ProductImage from '@components/ProductImage/ProductImage';
import { StyledProductImageContainer, StyledProduct } from './Product.styled';

const Product = ({ slug, name, price, image, hoverImage, onClick }) => (
  <Link
    href={`/products/${slug}`}
    onClick={onClick}
    className='product'
    data-testid='product'
  >
    <StyledProduct>
      <StyledProductImageContainer>
        <ProductImage {...hoverImage} className='product__hover-image bottom' />
        <ProductImage {...image} className='product__image top' />
      </StyledProductImageContainer>
      <Typography
        type='subtitle1'
        color='secondary'
        fontWeight='bold'
        textAlign='center'
        as='h2'
        className='product__name'
      >
        {name}
      </Typography>
      <Typography
        type='subtitle1'
        color='primary'
        fontWeight='bold'
        textAlign='center'
        as='p'
        className='product__price'
      >
        {formatCurrency(price)}
      </Typography>
      <FancyLine />
      <FakeButton className='product__cta' centered>
        <Typography color='tertiary' fontWeight='bold'>
          Ver más
        </Typography>
      </FakeButton>
    </StyledProduct>
  </Link>
);

Product.propTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  hoverImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  onClick: PropTypes.func
};

Product.defaultProps = {
  slug: '/',
  name: '',
  price: undefined,
  image: {},
  hoverImage: undefined,
  onClick: () => {}
};

export default Product;
