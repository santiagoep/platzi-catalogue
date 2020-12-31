import render from '../../render';
import Navbar from '@components/Navbar/Navbar';

describe('<Navbar />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Navbar />);
    expect(component).toMatchSnapshot();
  });
});
