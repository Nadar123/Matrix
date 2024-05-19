import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
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
        <Link
          to='/'
          className='text-2xl font-semibold text-white dark:text-gray-300'
        >
          AppStore Assigment
        </Link>

        <div className='flex items-center'>
          <button
            className='bg-blue-500 hover:bg-blue-700 dark:dark:bg-gray-500 dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full text-xs mx-12'
            onClick={handleThemeChange}
          >
            Dark Mode
          </button>
          <div className='flex items-center justify-around bg-white mx-12 px-8 border-t-4 border-black'>
            <NavLink
              to='/'
              className='nav-item flex flex-col-reverse text-gray-500 py-1.5 pr-12 pl-4'
            >
              <p>Home</p>
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink
              to='/favorites'
              className='nav-item flex flex-col-reverse text-gray-500 py-1.5 pl-12 pr-4'
            >
              <p>Favorites</p>
              <FontAwesomeIcon icon={faHeart} />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
