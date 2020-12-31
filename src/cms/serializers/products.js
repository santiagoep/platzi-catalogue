import imageSerializer from './common/image';
import validateField from '@utils/validations';

const productsSerializer = ({ products }) =>
  validateField(
    products?.map(({ images, ...rest }) => ({
      ...rest,
      image: imageSerializer({ image: images[0] }),
      hoverImage: imageSerializer({ image: images[1] })
    }))
  );

export default productsSerializer;
