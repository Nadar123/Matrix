import React, { useEffect } from 'react';
import PaidAppsItem from '../PaidAppsItem/PaidAppsItem';
import { useSelector, useDispatch } from 'react-redux';
import { getPaidApps } from '../../state/slices/global.features';
import { RootState } from '../../state/store';

function PaidApps() {
  const dispatch = useDispatch();
  const { paidApps, loading, error } = useSelector(
    (state: RootState) => state.global
  );

  useEffect(() => {
    dispatch((getPaidApps as any)());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='freeApps-warpper py-10'>
      <h2 className='text-left py-8 text-black dark:text-white'>
        Top Paid Apps
      </h2>
      <div className='w-2/5 flex flex-col items-start h-96 overflow-y-scroll  bg-custom-gray dark:bg-gray-500 bg-opacity-43 p-t-2 p-b-2 p-l-1.5 rounded-lg'>
        {paidApps.length > 0 ? (
          paidApps.map((app: any) => <PaidAppsItem key={app.id} app={app} />)
        ) : (
          <p>No Apps to show</p>
        )}
      </div>
    </div>
  );
}

export default PaidApps;
