import React, { useState } from 'react';
import Header from './components/Header/Header';
import LandingPage from './LandingPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = ({ toggleTheme, theme }) => {
  const [themeMode, setThemeMode] = useState('light');

  const handleThemeChange = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    toggleTheme();
  };

  const newTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={newTheme}>
      <Header toggleTheme={handleThemeChange} />
      <LandingPage toggleTheme={handleThemeChange} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
