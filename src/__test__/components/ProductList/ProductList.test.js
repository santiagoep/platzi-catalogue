import render from '../../render';
import ProductList from '@components/ProductList/ProductList';
import productListMock from '@__mocks__/components/productList';

describe('<ProductList />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<ProductList products={productListMock} />);
    expect(component).toMatchSnapshot();
  });
});
