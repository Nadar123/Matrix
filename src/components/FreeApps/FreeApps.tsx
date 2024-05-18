import React, { useEffect } from 'react';
import FreeAppItem from '../FreeAppItem/FreeAppItem';
import { useSelector, useDispatch } from 'react-redux';
import { getFreeApps } from '../../state/slices/global.features';
import { RootState } from '../../state/store';

function FreeApps() {
  const dispatch = useDispatch();
  const { freeApps, loading, error } = useSelector(
    (state: RootState) => state.global
  );

  useEffect(() => {
    dispatch((getFreeApps as any)());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className='freeApps-warpper'>
      <h1 className='text-left text-black dark:text-white'>Top Free Apps</h1>
      <div className='flex items-center overflow-x-scroll overflow-hidden'>
        {freeApps.length > 0 ? (
          freeApps.map((app: any) => <FreeAppItem key={app.id} app={app} />)
        ) : (
          <p>no posts to show</p>
        )}
      </div>
    </div>
  );
}

export default FreeApps;
