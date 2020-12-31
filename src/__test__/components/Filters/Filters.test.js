import render from '../../render';
import Filters from '@components/Filters/Filters';

describe('<Filters />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Filters />);
    expect(component).toMatchSnapshot();
  });
  it('Should search', () => {
    const { mount } = render({ theme: true });
    const spy = jest.fn();
    const component = mount(<Filters onFilter={spy} />);
    component
      .find('#query-text-filters')
      .last()
      .simulate('change', { target: { value: 'Test' } });
    expect(spy).toHaveBeenCalledWith({
      queryText: 'Test',
      sort: ''
    });
  });
  it('Should sort', () => {
    const { mount } = render({ theme: true });
    const spy = jest.fn();
    const component = mount(<Filters onFilter={spy} />);
    component
      .find('#sort-filters')
      .last()
      .simulate('change', {
        target: { value: 'price_from_lowest_to_highest' }
      });
    expect(spy).toHaveBeenCalledWith({
      queryText: '',
      sort: 'price_from_lowest_to_highest'
    });
  });
  it('Should clean filters', () => {
    const { mount } = render({ theme: true });
    const spy = jest.fn();
    const component = mount(<Filters onFilter={spy} />);
    component
      .find('#query-text-filters')
      .last()
      .simulate('change', { target: { value: 'Test' } });
    component.find('.filters__clean').last().simulate('click');
    expect(spy).toHaveBeenCalledWith({
      queryText: '',
      sort: ''
    });
  });
});
