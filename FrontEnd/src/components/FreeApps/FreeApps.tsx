import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import {
  fetchFreeApps,
  fetchPaidApps,
} from '../../state/slices/global.features';
import FreeAppItem from '../FreeAppItem/FreeAppItem';
import Spinner from '../UI/Spinner/Spinner';

function FreeApps() {
  const dispatch = useDispatch<AppDispatch>();

  const { freeApps, loading, error } = useSelector(
    (state: RootState) => state.global
  );
  const freeAppsData = freeApps?.feed?.results || [];
  const title = freeApps?.feed?.title || '';

  useEffect(() => {
    dispatch(fetchFreeApps());
    dispatch(fetchPaidApps());
  }, [dispatch]);

  if (loading) return <Spinner loading />;

  if (error) return <h1>{error}</h1>;
  return (
    <div className='freeApps-warpper'>
      <h1 className='text-left text-black dark:text-white pb-4'>{title}</h1>
      <div className='flex items-center gap-x-5 overflow-x-scroll overflow-hidden'>
        {freeAppsData && freeAppsData.length > 0 ? (
          freeAppsData.map((app: any) => <FreeAppItem key={app.id} {...app} />)
        ) : (
          <p>No Apps to show</p>
        )}
      </div>
    </div>
  );
}

export default FreeApps;
