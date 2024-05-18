import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div>
      <nav className='flex justify-between items-center p-4 bg-blue-500 dark:bg-gray-800'>
        <div className='text-2xl font-semibold text-white dark:text-gray-300 '>
          AppStore Assigment
        </div>

        <div className='flex items-baseline'>
          <button
            className='bg-blue-500 hover:bg-blue-700 dark:dark:bg-gray-500 dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full text-xs mx-12'
            onClick={handleThemeChange}
          >
            Dark Mode
          </button>

          <NavLink to='/' className='p-2 text-white'>
            Home
          </NavLink>
          <NavLink to='/favorites' className='p-2 text-white'>
            Favorites{' '}
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
