import productSerializer from './product';
import productsSerializer from './products';
import productSlugsSerializer from './productSlugs';

export default {
  getProduct: productSerializer,
  getProducts: productsSerializer,
  getProductSlugs: productSlugsSerializer
};
