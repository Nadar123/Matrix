import React from 'react';

const FavoriteItem: React.FC<any> = ({ app }) => (
  <div className='bg-white-500 dark:bg-gray-800 w-full shadow-md'>
    <h2 className='p-4 text-black dark:text-white'>{app.artistName}</h2>
    <div className='w-[150px] h-full mx-auto overflow-hidden cursor-pointer pb-8'>
      <img
        className='p-5 w-[150px] object-cover rounded-[10px]'
        src={app.artworkUrl100}
        alt={app.artistName}
      />
    </div>
  </div>
);

export default FavoriteItem;
