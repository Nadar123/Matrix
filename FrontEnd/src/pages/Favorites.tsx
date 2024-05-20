import React, { useEffect, useState } from 'react';
import Layout from '../components/UI/Layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { AppData } from '../constants/interfaces.constant';
import FavoriteItem from '../components/FavoriteItem/FavoriteItem';

function Favorites() {
  const [favoriteApps, setFavoriteApps] = useState<AppData[]>([]);
  const freeApps = useSelector((state: RootState) => state.global.freeApps);
  const paidApps = useSelector((state: RootState) => state.global.paidApps);

  useEffect(() => {
    const storedLikes = localStorage.getItem('likedApps');
    let likedAppIds = storedLikes ? JSON.parse(storedLikes) : [];

    // Mapping apps arrays
    const freeAppData = freeApps.map((app) => ({
      id: app.id,
      artworkUrl100: app.artworkUrl100,
      artistName: app.artistName,
    }));
    const paidAppData = paidApps.map((app) => ({
      id: app.id,
      artworkUrl100: app.artworkUrl100,
      artistName: app.artistName,
    }));

    const allApps = [...freeAppData, ...paidAppData];

    // filter Favorites apps
    const apps = allApps.filter((app: AppData) => likedAppIds.includes(app.id));
    setFavoriteApps(apps);
  }, [freeApps, paidApps]);

  return (
    <>
      <Layout>
        <div className='grid grid-cols-4 gap-4 text-center p-5'>
          {favoriteApps.length > 0 ? (
            favoriteApps.map((app) => <FavoriteItem key={app.id} app={app} />)
          ) : (
            <p className='text-center dark:text-gray-100'>
              No selected apps in Favorites.
            </p>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Favorites;
