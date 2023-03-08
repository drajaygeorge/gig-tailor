import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';

const TextInput = ({ ...props }) => {
  return <MuiTextField {...props} />;
};

export default TextInput;
