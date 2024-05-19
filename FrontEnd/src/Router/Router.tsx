import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar/NavBar';
import Favorites from '../pages/Favorites';
import NotFoundPage from '../pages/NotFound';

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
