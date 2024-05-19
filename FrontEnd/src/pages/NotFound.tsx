import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/UI/Layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className='text-6xl text-black dark:text-white'>404</h1>
      <p className='mb-8 text-black dark:text-white'>Page not found!</p>
      <Link
        to='/'
        className='inline-block px-12 py-12 text-xl underline text-gray-500'
      >
        Back to Home Page
      </Link>
    </Layout>
  );
};

export default NotFoundPage;
