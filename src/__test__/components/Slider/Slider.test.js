import React from 'react';

import render from '../../render';
import Slider from '@components/Slider/Slider';

describe('<Slider />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(
      <Slider>
        <Slider.Slide>Test</Slider.Slide>
      </Slider>
    );
    expect(component).toMatchSnapshot();
  });
});
