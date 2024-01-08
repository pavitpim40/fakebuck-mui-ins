import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function RedirectRoute({ children }) {
  const { user } = useAuth();
  if (user) return <Navigate to='/' />;
  return children;
}

export default RedirectRoute;
