import render from '../../render';
import CustomLink from '@components/Link/Link';

describe('<Link />', () => {
  it('should render snapshot', () => {
    const { renderer } = render();
    const component = renderer(<CustomLink href='/'>Home</CustomLink>);
    expect(component).toMatchSnapshot();
  });
  it('should click', () => {
    const spy = jest.fn();
    const { mount } = render();
    const component = mount(
      <CustomLink href='/' onClick={spy}>
        Home
      </CustomLink>
    );
    component.find('a').last().simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  it('should click with external url', () => {
    const spy = jest.fn();
    const { mount } = render();
    const component = mount(
      <CustomLink href='https://www.google.com/' onClick={spy}>
        Google
      </CustomLink>
    );
    component.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
