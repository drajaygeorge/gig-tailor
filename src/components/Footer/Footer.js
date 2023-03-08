import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      My App &copy; {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
