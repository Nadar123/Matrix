import React, { ReactNode } from 'react';

function Layout({
  children,
  isFavoritesPage = false,
}: {
  children: ReactNode;
  isFavoritesPage?: boolean;
}) {
  return (
    <div className='py-12 text-center w-full mx-auto min-h-screen'>
      {children}
    </div>
  );
}

export default Layout;
