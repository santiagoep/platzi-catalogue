import render from '../../../render';
import { Col } from '@components/Grid/Grid';

describe('<Col />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Col>Col Test</Col>);
    expect(component).toMatchSnapshot();
  });
  it('Should render snapshot with width', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Col smallMobile='100%'>Col Test</Col>);
    expect(component).toMatchSnapshot();
  });
});
