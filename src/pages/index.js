import { useState } from 'react';
import PropTypes from 'prop-types';

import cms from '@cms/index';
import Layout from '@components/Layout/Layout';
import Filters from '@components/Filters/Filters';
import { Row, Col, Grid } from '@components/Grid/Grid';
import filterStrategies from '@strategies/filter/index';
import ProductList from '@components/ProductList/ProductList';

const Home = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const onFilter = (filters) =>
    setFilteredProducts(
      filterStrategies(filters, filteredProducts, products.slice())
    );

  return (
    <Layout>
      <Grid>
        <Row>
          <Col smallMobile='100%' desktop='20%'>
            <Filters onFilter={onFilter} />
          </Col>
          <Col smallMobile='100%' desktop='80%'>
            <ProductList products={filteredProducts} />
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const products = await cms.query('getProducts');
  return {
    props: {
      products
    },
    revalidate: 86400 // every 24h
  };
};

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

Home.defaultProps = {
  products: []
};

export default Home;
