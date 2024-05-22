import React from 'react';
import Layout from '../components/UI/Layout/Layout';
import FreeApps from '../components/FreeApps/FreeApps';
import PaidApps from '../components/PaidApps/PaidApps';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>home</h1>
      <FreeApps />
      <PaidApps />
    </Layout>
  );
};

export default Home;
