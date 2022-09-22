import { IconButton } from '@mui/material';
import React from 'react';
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';
import Actions from './actions';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const AppbarMobile = ({ matches }) => {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader
        textAlign={'center'}
        variant='h4'
      >
        My Bags
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarMobile;
