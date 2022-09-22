import { Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import {
    BannerContainer,
    BannerContent,
    BannerTitle,
    BannerDescription,
    BannerImage
} from '../../styles/banner';

const Banner = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <BannerContainer>
      <BannerImage src='/images/banner/banner.png' />
      <BannerContent>
        <Typography variant='h6'>Huge Collection</Typography>
        <BannerTitle variant='h2'>New Bags</BannerTitle>
        <BannerDescription variant='subtitle'>
          Our mission is to organize the world’s information and make it universally accessible and useful.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner