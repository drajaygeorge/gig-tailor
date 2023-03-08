import React from 'react';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIconName } from '@fortawesome/free-solid-svg-icons'; // replace faIconName with the name of the FontAwesome icon you want to use

const Icon = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <FontAwesomeIcon icon={faIconName} />
    </IconButton>
  );
};

export default Icon;
