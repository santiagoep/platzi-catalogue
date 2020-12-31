import cms from '@cms/index';
import Layout from '@components/Layout/Layout';
import Container from '@components/Container/Container';
import ProductDetail from '@components/ProductDetail/ProductDetail';

const Product = (props) => (
  <Layout title={props.name}>
    <Container>
      <ProductDetail {...props} />
    </Container>
  </Layout>
);

export const getStaticProps = async ({ params: { slug } }) => {
  const product = await cms.query('getProduct', { slug });
  return {
    props: { ...product }
  };
};

export const getStaticPaths = async () => {
  const paths = await cms.query('getProductSlugs');
  return {
    paths,
    fallback: false
  };
};

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
