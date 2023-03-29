import { Navigation } from 'components/navigation/Navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selecisLoading } from 'redux/selectors';

export const Layout = () => {
  const loggedIn = useSelector(selecisLoading);

  return (
    !loggedIn && (
      <div>
        <Navigation />
        <Outlet />
      </div>
    )
  );
};
