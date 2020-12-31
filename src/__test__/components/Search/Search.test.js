import React from 'react';

import render from '../../render';
import Search from '@components/Search/Search';

describe('<Search />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Search id='search' />);

    expect(component).toMatchSnapshot();
  });
  it('Should search', () => {
    const spy = jest.fn();
    const { mount } = render({ theme: true });
    const component = mount(<Search id='search' onSearch={spy} />);
    component
      .find('#search')
      .last()
      .simulate('change', { target: { value: 'Test' } });
    expect(spy).toHaveBeenCalledWith('Test');
  });

  it('Should clean query text', () => {
    const spy = jest.fn();
    const { mount } = render({ theme: true });
    const component = mount(<Search id='search' onSearch={spy} />);
    component
      .find('#search')
      .last()
      .simulate('change', { target: { value: 'Test' } });
    component.find('.clean-query-text').last().simulate('click');
    expect(spy).toHaveBeenCalledWith('');
  });
});
