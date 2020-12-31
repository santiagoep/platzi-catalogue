import render from '../../render';
import productMock from '@__mocks__/components/product';
import Product from '@components/Product/Product';

describe('<Product />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Product {...productMock} />);
    expect(component).toMatchSnapshot();
  });
  it('Should click on product', () => {
    const { mount } = render({ theme: true });
    const spy = jest.fn();
    const component = mount(<Product onClick={spy} {...productMock} />);
    component.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
