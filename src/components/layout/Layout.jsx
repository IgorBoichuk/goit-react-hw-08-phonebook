import { Navigation } from 'components/navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
