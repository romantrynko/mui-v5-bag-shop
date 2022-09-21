import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import AppbarMobile from './appbarMobile';
import AppbarDesktop from './appbarDesktop';

const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </div>
  );
};

export default Appbar;
