import { Box, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/Rightbar';
import Feed from '../components/Feed';

function HomePage() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />

        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default HomePage;
