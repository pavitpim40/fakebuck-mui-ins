import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      // try to login
      login();
      // navigate('/');
    } catch (error) {
      // console.log(error)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      LoginPage
      <Button type='submit'>Login</Button>
    </form>
  );
}

export default LoginPage;
