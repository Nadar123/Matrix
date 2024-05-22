import React, { useEffect } from 'react';
import PaidAppsItem from '../PaidAppsItem/PaidAppsItem';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { fetchPaidApps } from '../../state/slices/global.features';

function PaidApps() {
  const dispatch = useDispatch<AppDispatch>();

  const { paidApps, loading, error } = useSelector(
    (state: RootState) => state.global
  );

  const freeAppsData = paidApps?.feed?.results || [];
  const title = paidApps?.feed?.title || '';

  useEffect(() => {
    dispatch(fetchPaidApps());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='freeApps-warpper py-10'>
      <h2 className='text-left pb-4 pt-4 text-black dark:text-white'>
        {title}
      </h2>
      <div className='w-2/5 flex flex-col items-start h-96 overflow-y-scroll  bg-custom-gray dark:bg-gray-500 bg-opacity-43 p-t-2 p-b-2 p-l-1.5 rounded-lg'>
        {freeAppsData.length > 0 ? (
          freeAppsData.map((app: any) => <PaidAppsItem key={app.id} {...app} />)
        ) : (
          <p>No Apps to show</p>
        )}
      </div>
    </div>
  );
}

export default PaidApps;
