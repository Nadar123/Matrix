import React from 'react';
import FreeApp from '../components/FreeApps/FreeApps';
import PaidApps from '../components/PaidApps/PaidApps';
import Layout from '../components/UI/Layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <FreeApp />
      <PaidApps />
    </Layout>
  );
};

export default Home;
