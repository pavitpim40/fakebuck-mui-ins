import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Image, VideoCameraBack, PersonAdd } from '@mui/icons-material';
import { Avatar, Stack, TextField, styled } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  minHeight: 280,
  bgcolor: 'background.paper',
  borderRadius: 4,
  p: 4,
};

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

function CreatePost() {
  const [open, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box px={5}>
      <Button variant='contained' onClick={handleOpen} sx={{ width: '100%' }}>
        Create Post
      </Button>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography variant='h6' color='gray' textAlign='center'>
            Create post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500}>John Doe</Typography>
          </UserBox>
          <TextField
            id='standard-multiline-static'
            multiline
            sx={{ width: '100%' }}
            rows={2}
            placeholder='What"s on your mind'
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={4}>
            <Image color='secondary' />
            <VideoCameraBack color='error' />
            <PersonAdd color='primary' />
          </Stack>
          <Button sx={{ width: '100%' }} variant='contained'>
            Post
          </Button>
        </Box>
      </StyledModal>
    </Box>
  );
}

export default CreatePost;
