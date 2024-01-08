import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1760a5',
      light: 'skyblue',
    },
    secondary: {
      main: '#15c630',
    },
    otherColor: {
      main: '#999',
    },
  },
});

export function generateTheme(mode) {
  console.log(mode);
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#1760a5',
        light: 'skyblue',
        dark: '#fff',
      },
      secondary: {
        main: '#15c630',
      },
      otherColor: {
        main: '#999',
      },
    },
  });
}
