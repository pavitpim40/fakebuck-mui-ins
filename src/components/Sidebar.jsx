import { Home, ModeNight, Person, Storefront } from '@mui/icons-material';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
export default function Sidebar() {
  const { toggleDarkMode } = useTheme();
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }} component='a' href='#home'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='HomePage' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component='a' href='#home'>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary='Marketplace' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component='a' href='#home'>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary='Friend' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component='a' href='#home'>
            <ListItemIcon>
              <ModeNight />
              <Switch onClick={() => toggleDarkMode()} />
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}
