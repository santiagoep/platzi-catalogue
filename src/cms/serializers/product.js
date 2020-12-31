import imagesSerializer from './common/images';
import validateField from '@utils/validations';

const productsSerializer = ({ product: { images, description, ...rest } }) =>
  validateField(
    {
      ...rest,
      description: validateField(description?.text, ''),
      images: imagesSerializer({ images })
    },
    {}
  );

export default productsSerializer;
