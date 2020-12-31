import imageSerializer from './image';
import validateField from '@utils/validations';

const imagesSerializer = ({ images }) =>
  validateField(images?.map((image) => imageSerializer({ image })));

export default imagesSerializer;
