import React from 'react';

import render from '../../render';
import Select from '@components/Select/Select';

describe('<Select />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Select id='Select' />);

    expect(component).toMatchSnapshot();
  });
  it('Should Select', () => {
    const spy = jest.fn();
    const { mount } = render({ theme: true });
    const component = mount(<Select id='select' onSelect={spy} />);
    component
      .find('#select')
      .last()
      .simulate('change', {
        target: { value: 'price_from_highest_to_lowest' }
      });
    expect(spy).toHaveBeenCalledWith('price_from_highest_to_lowest');
  });
  it('Should render snapshot with default value', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Select id='Select' defaultValue='Opciones...' />);

    expect(component).toMatchSnapshot();
  });
});
