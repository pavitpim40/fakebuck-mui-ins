import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to='/login' />;
  return children;
}

export default ProtectRoute;
