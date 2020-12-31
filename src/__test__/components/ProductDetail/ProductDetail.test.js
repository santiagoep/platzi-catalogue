import render from '../../render';
import productDetail from '@__mocks__/components/productDetail';
import ProductDetail from '@components/ProductDetail/ProductDetail';

describe('<ProductDetail />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<ProductDetail {...productDetail} />);
    expect(component).toMatchSnapshot();
  });
  it('Should on back', () => {
    const { mount } = render({ theme: true });
    const spy = jest.fn();
    const component = mount(<ProductDetail onBack={spy} {...productDetail} />);
    component.find('a').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
