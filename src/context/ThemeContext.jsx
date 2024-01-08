import { createContext, useState, useMemo, useCallback } from 'react';
import { ThemeProvider } from '@mui/material';
import { generateTheme } from '../theme';
import { useContext } from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('dark');

  const toggleDarkMode = useCallback(() => {
    console.log(mode);
    if (mode === 'light') setMode('dark');
    else setMode('light');
  }, [mode]);
  const theme = useMemo(() => generateTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
