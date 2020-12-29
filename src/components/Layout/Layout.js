import Head from "next/head";
import PropTypes from "prop-types";

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: "Platzi | Catalogue",
};

export default Layout;
