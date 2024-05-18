import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar/NavBar';
import Favorites from '../pages/Favorites';

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route
          path='*'
          element={
            <h2 style={{ textAlign: 'center', padding: '4rem' }}>
              404 Page not found
            </h2>
          }
        />
      </Routes>
    </Router>
  );
}
