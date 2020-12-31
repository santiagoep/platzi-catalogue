import render from '../../../render';
import { Row } from '@components/Grid/Grid';

describe('<Row />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Row>Row Test</Row>);
    expect(component).toMatchSnapshot();
  });
  it('Should render snapshot with breakpoint height', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Row smallMobile='100vh'>Row Test</Row>);
    expect(component).toMatchSnapshot();
  });
});
