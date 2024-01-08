import { Box } from '@mui/material';
import Post from './Post';
import CreatePost from './CreatePost';

export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <CreatePost />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
