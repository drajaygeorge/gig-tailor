import React from 'react';
import { Grid as MuiGrid } from '@material-ui/core';

const Grid = ({ children, ...props }) => {
  return <MuiGrid {...props}>{children}</MuiGrid>;
};

export default Grid;
