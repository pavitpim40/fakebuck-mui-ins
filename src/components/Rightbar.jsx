import { Box, Typography, Avatar, AvatarGroup } from '@mui/material';

function Rightbar() {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }} flex={2} p={2}>
      <Box position='fixed'>
        <Typography variant='h6' fontWeight={100}>
          Online User
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt='Remy Sharp' src='https://material-ui.com/static/images/avatar/1.jpg' />
          <Avatar alt='Travis Howard' src='https://material-ui.com/static/images/avatar/2.jpg' />
          <Avatar alt='Cindy Baker' src='https://material-ui.com/static/images/avatar/3.jpg' />
          <Avatar alt='Agnes Walker' src='' />
          <Avatar alt='Trevor Henderson' src='https://material-ui.com/static/images/avatar/6.jpg' />
          <Avatar alt='Trevor Henderson' src='https://material-ui.com/static/images/avatar/7.jpg' />
          <Avatar alt='Trevor Henderson' src='https://material-ui.com/static/images/avatar/8.jpg' />
          <Avatar alt='Trevor Henderson' src='https://material-ui.com/static/images/avatar/7.jpg' />
          <Avatar alt='Trevor Henderson' src='https://material-ui.com/static/images/avatar/8.jpg' />
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default Rightbar;
