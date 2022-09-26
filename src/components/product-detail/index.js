import React from 'react'
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Slide, styled } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Colors } from '../../styles/theme';
import { ProductImage, Product } from '../../styles/products';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

const SlideTransition = (props) => {
  return <Slide direction='down' {...props} />
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(4)
}))

const ProductDetailInfoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 500,
  lineHeight: 1.5
}))

const ProductDetails = ({ open, onClose, product }) => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant='permanent'
      open={open}
      fullScreen
    >
      <DialogTitle sx={{
        background: Colors.secondary
      }}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          Product title
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper
          flexDirection={matches ? 'column' : 'row'}
        >
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant='subtitle1'>asd</Typography>
            <Typography variant='subtitle1'>Availability: 5 in stock</Typography>
            <Typography sx={{ lineHeight: 2 }} variant='h4'>{product.name}</Typography>

            <Typography variant='body'>
              {product.name}
              {product.name}
              {product.name}
            </Typography>
      
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDetails