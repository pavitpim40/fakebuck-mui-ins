import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import AppLayout from '../layout/AppLayout';
import RedirectRoute from './RedirectRoute';
import ProtectRoute from './ProtectRoute';

function Router() {
  // Array<RouterObject>
  const router = createBrowserRouter([
    {
      path: '/login',
      element: (
        <RedirectRoute>
          <LoginPage />
        </RedirectRoute>
      ),
    },
    {
      path: '/',
      element: (
        <ProtectRoute>
          <AppLayout />
        </ProtectRoute>
      ),
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
      ],
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
