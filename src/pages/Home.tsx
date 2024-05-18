import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
// import { getFreeApps } from '../state/slices/global.features';
import FreeApp from '../components/FreeApps/FreeApps';
import PaidApps from '../components/PaidApps/PaidApps';

const Home: React.FC = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   dispatch(getFreeApps());
  // }, [dispatch]);

  return (
    <>
      <div className='p-12 text-center w-full mx-auto'>
        <FreeApp />
        <PaidApps />
      </div>
    </>
  );
};

export default Home;
