import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AppLayout() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default AppLayout;
