import Head from 'next/head';
import PropTypes from 'prop-types';

import Navbar from '@components/Navbar/Navbar';
import Seo from '@components/Seo/Seo';

const Layout = ({ children, seo }) => (
  <>
    <Seo {...seo} />
    <Navbar />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  seo: PropTypes.object
};

Layout.defaultProps = {
  seo: {}
};

export default Layout;
