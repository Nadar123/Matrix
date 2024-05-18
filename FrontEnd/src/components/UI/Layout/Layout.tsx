import React, { ReactNode } from 'react';

function Layout({
  children,
  isFavoritesPage = false,
}: {
  children: ReactNode;
  isFavoritesPage?: boolean;
}) {
  return (
    <div
      style={isFavoritesPage ? { minHeight: '100vh' } : {}}
      className='p-12 text-center w-full mx-auto'
    >
      {children}
    </div>
  );
}

export default Layout;
