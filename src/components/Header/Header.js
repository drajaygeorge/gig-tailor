import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const HeaderWrapper = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
}));

const Header = () => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <IconButton onClick={toggleTheme} color="inherit">
            {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
