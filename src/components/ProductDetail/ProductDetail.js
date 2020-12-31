import PropTypes from 'prop-types';

import Link from '@components/Link/Link';
import formatCurrency from '@utils/numbers';
import { Col, Row, Grid } from '@components/Grid/Grid';
import { StyledContainer } from './ProductDetail.styled';
import Typography from '@components/Typography/Typography';
import FakeButton from '@components/FakeButton/FakeButton';
import ProductDetailImages from '@components/ProductDetailImages/ProductDetailImages';

const ProductDetail = ({
  name,
  price,
  description,
  images,
  category,
  onBack
}) => (
  <Grid>
    <Row>
      <Col smallMobile='100%' tablet='50%'>
        <ProductDetailImages images={images} />
      </Col>
      <Col smallMobile='100%' tablet='50%'>
        <StyledContainer>
          <Typography
            className='product-detail__category-name'
            type='paragraph4'
            color='quaternary'
            fontWeight={400}
            as='p'
          >
            {category?.name}
          </Typography>
          <Typography
            className='product-detail__name'
            type='subtitle1'
            color='secondary'
            fontWeight='bold'
            as='h2'
          >
            {name}
          </Typography>
          <Typography
            className='product-detail__price'
            type='paragraph3'
            color='primary'
            fontWeight='bold'
            as='p'
          >
            {formatCurrency(price)}
          </Typography>
          <Typography
            className='product-detail__description'
            type='paragraph1'
            color='primary'
            as='p'
          >
            {description}
          </Typography>
          <Link href='/' onClick={onBack}>
            <FakeButton>
              <Typography color='tertiary' fontWeight='bold'>
                Volver
              </Typography>
            </FakeButton>
          </Link>
        </StyledContainer>
      </Col>
    </Row>
  </Grid>
);

ProductDetail.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  ),
  description: PropTypes.string,
  category: PropTypes.shape({ name: PropTypes.string }),
  onBack: PropTypes.func
};

ProductDetail.defaultProps = {
  name: '',
  price: undefined,
  images: [],
  description: '',
  category: {},
  onBack: () => {}
};

export default ProductDetail;
