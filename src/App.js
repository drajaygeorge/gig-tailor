import React, { useState } from 'react';
import Header from './components/Header/Header';
import LandingPage from './LandingPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
