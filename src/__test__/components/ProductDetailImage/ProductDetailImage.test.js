import render from '../../render';
import productDetail from '@__mocks__/components/productDetail';
import ProductDetailImage from '@components/ProductDetailImage/ProductDetailImage';

describe('<ProductDetailImage />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(
      <ProductDetailImage {...productDetail.images[0]} />
    );
    expect(component).toMatchSnapshot();
  });
});
