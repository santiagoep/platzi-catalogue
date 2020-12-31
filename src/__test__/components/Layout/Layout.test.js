import render from '../../render';
import Layout from '@components/Layout/Layout';

describe('<Layout />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Layout title='Title Test'>Layout Test</Layout>);
    expect(component).toMatchSnapshot();
  });
});
