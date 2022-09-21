import { useMediaQuery } from '@mui/material';
import React from 'react'

const Banner = () => {

  const matches = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <div>Banner</div>
  )
}

export default Banner