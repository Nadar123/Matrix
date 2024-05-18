import React, { useEffect, useState } from 'react';
import Layout from '../components/UI/Layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

interface AppData {
  id: string;
  artworkUrl100: string;
  artistName: string;
}
function Favorites() {
  const [favoriteApps, setFavoriteApps] = useState<AppData[]>([]);
  const freeApps = useSelector((state: RootState) => state.global.freeApps);
  const paidApps = useSelector((state: RootState) => state.global.paidApps);

  useEffect(() => {
    const storedLikes = localStorage.getItem('likedApps');
    let likedAppIds = storedLikes ? JSON.parse(storedLikes) : [];

    // Map the IAppState arrays to AppData arrays
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

    // Fetch the app data for each liked app ID
    const apps = allApps.filter((app: AppData) => likedAppIds.includes(app.id));
    setFavoriteApps(apps);
  }, [freeApps, paidApps]);

  return (
    <>
      <Layout isFavoritesPage={true}>
        <div className='grid grid-cols-3 gap-4 text-center p-5'>
          {favoriteApps.length > 0 ? (
            favoriteApps.map((app) => (
              <div
                key={app.id}
                className='bg-white-500 dark:bg-gray-800 w-full shadow-md'
              >
                <h2 className='p-4 text-black dark:text-white'>
                  {app.artistName}
                </h2>
                <div className='w-[200px] h-full mx-auto overflow-hidden cursor-pointer pb-8'>
                  <img
                    className='p-5 w-[200px] object-cover rounded-[10px]'
                    src={app.artworkUrl100}
                    alt={app.artistName}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className='text-center'>No selected apps in Favorites.</p>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Favorites;