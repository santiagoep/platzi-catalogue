/* eslint-disable react/prop-types */
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

jest.mock('lodash.debounce', () => (fn) => fn);

jest.mock('next/link', () => ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
));

jest.mock('react-slick', () => ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
));

Enzyme.configure({ adapter: new Adapter() });
