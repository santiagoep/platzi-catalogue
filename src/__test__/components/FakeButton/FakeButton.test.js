import render from '../../render';
import FakeButton from '@components/FakeButton/FakeButton';

describe('<FakeButton />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<FakeButton>FakeButton Test</FakeButton>);
    expect(component).toMatchSnapshot();
  });
});
