import render from '../../../render';
import { Grid } from '@components/Grid/Grid';

describe('<Grid />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Grid>Grid Test</Grid>);
    expect(component).toMatchSnapshot();
  });
});
