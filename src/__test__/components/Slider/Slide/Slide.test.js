import React from 'react';

import render from '../../../render';
import Slide from '@components/Slider/Slide/Slide';

describe('<Slide />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Slide>Test</Slide>);
    expect(component).toMatchSnapshot();
  });
});
