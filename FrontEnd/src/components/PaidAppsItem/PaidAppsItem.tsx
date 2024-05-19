import React from 'react';
import useLike from '../../hooks/useLike';
import { PaidAppItemProps } from '../../constants/interfaces.constant';

function PaidAppsItem({ app }: PaidAppItemProps) {
  const { isLiked, toggleLike } = useLike(app.id);

  return (
    <div
      key={app.id}
      className='flex items-center text-left flex-start pl-0 pr-4 bg-gray-200 dark:bg-gray-800 rounded-lg my-1  m-1.5 w-[95%]'
    >
      <div className='p-2 w-[100px] h-full overflow-hidden cursor-pointer'>
        <img
          className='w-full h-full object-cover rounded-[10px]'
          src={app.artworkUrl100}
          alt=''
        />
      </div>
      <p className='px-2.5 w-2/3 font-medium text-base text-black dark:text-white'>
        {app.artistName}
      </p>
      <div>
        <div
          onClick={toggleLike}
          className={`'w-1/6 flex justify-end cursor-pointer ${
            isLiked ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 transform rotate-180'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 19l-1.285 1.429a3.95 3.95 0 01-5.636-5.577L12 5l7.92 8.852A3.95 3.95 0 0112 19z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PaidAppsItem;
