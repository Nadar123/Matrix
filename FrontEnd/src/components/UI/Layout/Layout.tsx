import React, { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='py-12  pr-1 pl-1 text-center w-full mx-auto min-h-screen'>
      {children}
    </div>
  );
}

export default Layout;
