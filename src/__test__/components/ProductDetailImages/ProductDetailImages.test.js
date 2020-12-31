import render from '../../render';
import productDetail from '@__mocks__/components/productDetail';
import ProductDetailImages from '@components/ProductDetailImages/ProductDetailImages';

describe('<ProductDetailImages />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(
      <ProductDetailImages images={productDetail.images} />
    );
    expect(component).toMatchSnapshot();
  });
});
