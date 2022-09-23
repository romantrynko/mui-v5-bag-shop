import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from '../../styles/appbar';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';
import { useUIContext } from '../../context/ui';

const AppbarDesktop = ({ matches }) => {

  const { showSearchBox, setShowSearchBox } = useUIContext()


  return (
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <MyList type='row'>
        <ListItemText primary='Home' />
        <ListItemText primary='Categories' />
        <ListItemText primary='Products' />
        <ListItemText primary='Contact Us' />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon onClick={() => setShowSearchBox(true)} />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarDesktop;
