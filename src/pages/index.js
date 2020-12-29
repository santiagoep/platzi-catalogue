import PropTypes from "prop-types";
import Layout from "@components/Layout/Layout";

const Home = ({}) => {
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  );
};

export const getServerSideProps = () => ({ props: {} });

Home.propTypes = {};

export default Home;
