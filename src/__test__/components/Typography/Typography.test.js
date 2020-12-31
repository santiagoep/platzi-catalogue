import React from 'react';

import render from '../../render';
import Typography from '@components/Typography/Typography';

describe('<Typography />', () => {
  it('Should render snapshot', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Typography>Test</Typography>);
    expect(component).toMatchSnapshot();
  });
  it('Should render snapshot with alias', () => {
    const { mount } = render({ theme: true });
    const component = mount(<Typography as='span'>Test</Typography>);
    expect(component).toMatchSnapshot();
  });
});
