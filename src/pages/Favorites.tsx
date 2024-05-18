import React, { useEffect, useState } from 'react';
import freeApps from '../freeApps.json';
import paidApps from '../paidApps.json';
// import ImageWorker from 'react-worker-image';

interface AppData {
  id: string;
  artworkUrl100: string;
  artistName: string;
}
const freeApp = freeApps.feed.results;
const paidApp = paidApps.feed.results;
const allApps = [...freeApp, ...paidApp];

function Favorites() {
  const [favoriteApps, setFavoriteApps] = useState<AppData[]>([]);

  useEffect(() => {
    const storedLikes = localStorage.getItem('likedApps');
    let likedApps = storedLikes ? JSON.parse(storedLikes) : [];

    // Filter apps based on the IDs in likedApps
    const apps = allApps.filter((app: AppData) => likedApps.includes(app.id));
    setFavoriteApps(apps);
  }, []);

  return (
    <>
      <div className='h-sreen bg-white dark:bg-black p-12 text-center w-full mx-auto'>
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
                <div className='w-[260px] h-full mx-auto overflow-hidden cursor-pointer'>
                  <img
                    className='p-5 w-[260px] object-cover rounded-[10px]'
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
      </div>
    </>
  );
}

export default Favorites;
// <h1>Favorites</h1>;
// {
//   favoriteApps.map((app) => (
//     <div key={app.id}>
//       <h2>{app.artistName}</h2>
//       <div className='w-[260px] h-full mx-auto overflow-hidden cursor-pointer'>
//         <img
//           className='w-full h-full object-cover rounded-[10px]'
//           src={app.artworkUrl100}
//           alt={app.artistName}
//         />
//       </div>
//     </div>
//   ));
// }
