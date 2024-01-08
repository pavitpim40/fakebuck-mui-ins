import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

function Router() {
  // Array<RouterObject>
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/profile',
      element: <ProfilePage />,
    },
    {
      path: '/friend',
      element: <ProfilePage />,
    },
    {
      path: '/friend/:friendId',
      element: <ProfilePage />,
    },
    {
      path: '*',
      element: <Navigate to='/login' />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
