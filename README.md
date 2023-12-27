# MUI

- Basic Usage
  - Button
  - Button with Icon
  - Typography
- SX Prop

```js
<Button
  disabled
  variant='contained'
  sx={{
    backgroundColor: 'skyblue',
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white',
    },
  }}
>
  Hi
</Button>
```

- Styled Components

```js
const BlueButton = styled(Button)({
  backgroundColor: 'skyblue',
  color: '#888',
  margin: 5,
  '&:hover': {
    backgroundColor: 'lightblue',
  },
  '&:disabled': {
    backgroundColor: 'gray',
    color: 'white',
  },
});
```

- Theme

```js
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
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
```

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

- Styled Components with Theme

```js
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
```

- Layout
- Responsive Design
