import { Box } from '@mui/material';

function Rightbar() {
  return (
    <Box bgcolor='lightcoral' sx={{ display: { xs: 'none', sm: 'block' } }} flex={2} p={2}>
      Rightbar
    </Box>
  );
}

export default Rightbar;
