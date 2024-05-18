import React, { useState, useEffect } from 'react';
import Router from './Router/Router';

const App: React.FC = () => {
  return (
    <div className='h-sreen bg-white dark:bg-black'>
      <Router />
    </div>
  );
};

export default App;
