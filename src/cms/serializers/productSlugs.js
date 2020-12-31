import validateField from '@utils/validations';

const productSlugsSerializer = ({ products }) =>
  validateField(
    products?.map(({ slug }) => ({
      params: { slug }
    })),
    []
  );

export default productSlugsSerializer;
