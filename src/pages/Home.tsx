import React from 'react';

import Counter from '../components/Counter/Counter';
import Posts from '../components/Posts/Posts';

const Home: React.FC = () => {
  return (
    <>
      <div className='p-12 text-center'>
        <h1>Home</h1>
        <Counter />
        <Posts />
      </div>
    </>
  );
};

export default Home;
