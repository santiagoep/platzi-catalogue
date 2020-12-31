import render from '../../render';
import FancyLine from '@components/FancyLine/FancyLine';

describe('<FancyLine />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<FancyLine />);
    expect(component).toMatchSnapshot();
  });
});
