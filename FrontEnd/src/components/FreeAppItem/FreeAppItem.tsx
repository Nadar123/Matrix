import React from 'react';
import useLike from '../../hooks/useLike';
import { IResults } from '../../constants/interfaces.constant';

function FreeAppItem({ artistName, id, artworkUrl100 }: IResults) {
  const { isLiked, toggleLike } = useLike(id);

  return (
    <div
      key={id}
      className='w-1/3 text-center border border-solid border-gray-400 hover:opacity-70'
    >
      <div className='pb-4'>
        <div
          onClick={toggleLike}
          className={`p-2.5 cursor-pointer ${
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
      <div className='flex justify-center w-[300px] h-full mx-auto overflow-hidden cursor-pointer'>
        <img
          style={{ minHeight: '100px' }}
          className='object-cover rounded-[10px]'
          src={artworkUrl100 || ''}
          alt={artistName}
        />
      </div>
      <p
        style={{ minHeight: '80px' }}
        className='p-2.5 text-xl font-normal leading-normal text-black dark:text-white'
      >
        {artistName}
      </p>
    </div>
  );
}

export default FreeAppItem;
