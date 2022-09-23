import styled from '@emotion/styled'
import { Drawer, List, ListItemText, ListItemButton, Divider } from '@mui/material'
import React from 'react'

const MiddleDivider = styled((props) => (
  <Divider variant='middle' {...props} />
))``

const AppDrawer = () =>
{
  return (
    <Drawer open={true}>
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
  )
}

export default AppDrawer