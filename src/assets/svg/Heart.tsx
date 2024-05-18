import React, { useState } from 'react';

function HeartIcon() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      onClick={toggleLike}
      className={`cursor-pointer ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
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
  );
}

export default HeartIcon;
