import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const HeaderWrapper = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
}));

const BodyWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.background.default,
  minHeight: '100vh',
  padding: theme.spacing(3),
  marginTop: theme.mixins.toolbar.minHeight,
}));

const Header = ({ toggleTheme, themeMode }) => {
  return (
    <>
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
      <BodyWrapper>
        {/* Your content here */}
      </BodyWrapper>
    </>
  );
};

export default Header;
