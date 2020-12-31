import render from '../../render';
import BaseStyles from '@components/BaseStyles/BaseStyles';

describe('<BaseStyles />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<BaseStyles />);
    expect(component).toMatchSnapshot();
  });
});
