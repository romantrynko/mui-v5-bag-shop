import React from 'react'
import styled from '@emotion/styled'
import {
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Divider
} from '@mui/material'
import { useUIContext } from '../../context/ui';
import { DrawerCloseButton } from '../../styles/appbar';
import { lighten } from 'polished';
import { Colors } from '../../styles/theme';
import { Close } from '@mui/icons-material';

const MiddleDivider = styled((props) => (
  <Divider variant='middle' {...props} />
))``

const AppDrawer = () => {

  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
        <Close sx={{
          fontSize: '2.5rem',
          color: lighten(0.09, Colors.secondary)
        }} />
      </DrawerCloseButton>}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Button</ListItemText>
          </ListItemButton>
          <MiddleDivider />

          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />

          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />

          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />

          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  )
}

export default AppDrawer