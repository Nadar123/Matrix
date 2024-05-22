import React, { useEffect, useState } from 'react';
import Layout from '../components/UI/Layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import FavoriteItem from '../components/FavoriteItem/FavoriteItem';

interface AppData {
  id: string;
  artworkUrl100: string;
  artistName: string;
}

function Favorites() {
  const [favoriteApps, setFavoriteApps] = useState<AppData[]>([]);

  const globalState = useSelector((state: RootState) => state.global);

  useEffect(() => {
    const freeApps = globalState?.freeApps?.feed?.results || [];
    const paidApps = globalState?.paidApps?.feed?.results || [];

    const storedLikes = localStorage.getItem('likedApps');
    let likedAppIds = storedLikes ? JSON.parse(storedLikes) : [];

    // Mapping apps arrays
    const freeAppData = freeApps.map((app: AppData) => ({
      id: app.id,
      artworkUrl100: app.artworkUrl100,
      artistName: app.artistName,
    }));
    const paidAppData = paidApps.map((app: AppData) => ({
      id: app.id,
      artworkUrl100: app.artworkUrl100,
      artistName: app.artistName,
    }));

    const allApps = [...freeAppData, ...paidAppData];

    // filter Favorites apps
    const apps = allApps.filter((app: AppData) => likedAppIds.includes(app.id));

    // Only update state if apps are different
    if (JSON.stringify(apps) !== JSON.stringify(favoriteApps)) {
      setFavoriteApps(apps);
    }
  }, [globalState, favoriteApps]);

  return (
    <>
      <Layout>
        <div className='grid grid-cols-4 gap-4 text-center p-5'>
          {favoriteApps.length > 0 ? (
            favoriteApps.map((app) => <FavoriteItem key={app.id} app={app} />)
          ) : (
            <p className='text-center dark:text-gray-100'>No selected apps.</p>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Favorites;
