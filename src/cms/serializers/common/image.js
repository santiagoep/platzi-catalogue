import validateField from '@utils/validations';

const imageSerializer = ({ image }) => ({
  src: validateField(image?.url),
  alt: validateField(image?.fileName)
});

export default imageSerializer;
