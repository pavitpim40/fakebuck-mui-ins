import { Button, Typography, styled } from '@mui/material';
import SettingIcon from '@mui/icons-material/Settings';

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white',
    },
  }));
  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button variant='contained' color='otherColor'>
        Contain
      </Button>
      <Button variant='outlined'>Outlined</Button>
      <Button startIcon={<SettingIcon />} color='success' variant='contained'>
        Hi
      </Button>
      <BlueButton variant='contained'>Hi</BlueButton>
      <BlueButton variant='contained'>Another</BlueButton>
    </div>
  );
}

export default App;
