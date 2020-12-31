import PropTypes from 'prop-types';

import Product from '@components/Product/Product';
import { Col, Row, Grid } from '@components/Grid/Grid';

const ProductList = ({ products }) => {
  const renderProducts = () =>
    products.map((product, index) => (
      <Col
        smallMobile='100%'
        tablet='50%'
        laptop='calc(100%/3)'
        key={`product-${index}`}
      >
        <Product {...product} />
      </Col>
    ));
  return (
    <Grid>
      <Row>{renderProducts()}</Row>
    </Grid>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

ProductList.defaultProps = {
  products: []
};

export default ProductList;
