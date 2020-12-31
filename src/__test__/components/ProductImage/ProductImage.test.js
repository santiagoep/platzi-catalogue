import render from '../../render';
import product from '@__mocks__/components/product';
import ProductImage from '@components/ProductImage/ProductImage';

describe('<ProductImage />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<ProductImage {...product.image} />);
    expect(component).toMatchSnapshot();
  });
});
