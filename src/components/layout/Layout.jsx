import { Navigation } from 'components/navigation/Navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectLogin } from 'redux/selectors';

export const Layout = () => {
  const loggedIn = useSelector(selectLogin);

  return (
    loggedIn && (
      <div>
        <Navigation />
        <Outlet />
      </div>
    )
  );
};
