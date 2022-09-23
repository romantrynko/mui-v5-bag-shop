import React from 'react'
import { FooterTitle, SubscribeTf } from '../../styles/footer';
import { Colors } from '../../styles/theme';
import { Button, Stack } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Box, Grid, List, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, Send } from '@mui/icons-material';

const Footer = () =>
{
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: {
          xs: 4, md: 10
        },
        pt: 12,
        pb: 12,
        fonSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item md={6} lg={4}>
          <FooterTitle variant='body1'>
            About Us
          </FooterTitle>
          <Typography variant='caption2'>
            Search Console tools and reports help you measure your site's Search traffic and performance, fix issues, and make your site shine in Google Search results
          </Typography>
          <Box sx={{
            mt: 4,
            color: Colors.dove_gray
          }}>
            <Facebook sx={{ mr: 1 }} />
            <Twitter sx={{ mr: 1 }} />
            <Instagram />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant='body1'>Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant='caption2'>
                About Us
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant='caption2'>
                Order Tracking
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant='caption2'>
                Privacy &amp; Policy
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant='caption2'>
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant='body1'>
            My Account
          </FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant='caption2'>
                Login
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant='caption2'>
                My Cart
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant='caption2'>
                My Account
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant='caption2'>
                WishList
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant='body1'>
            Newsletter
          </FooterTitle>
          <Stack>
            <SubscribeTf color='primary' label='Email Address' variant='standard' />
            <Button startIcon={<Send sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant='contained'
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box >
  )
}

export default Footer