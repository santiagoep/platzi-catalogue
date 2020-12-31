import render from '../../render';
import Container from '@components/Container/Container';

describe('<Container />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Container>Container Test</Container>);
    expect(component).toMatchSnapshot();
  });
});
