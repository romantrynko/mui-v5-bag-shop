import { Box, Button, IconButton, styled } from '@mui/material';
import { Colors } from '../theme';

export const Product = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
  }
}));

export const ProductImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '100%',
  background: Colors.light_gray,
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    width: '80%',
    padding: '24px',
  }
}))

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4
}))

export const ProductFavButton = styled(PoductActionButton)(({ isFav, theme }) => ({
  color: isFav ? Colors.primary : Colors.light,
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    right: 0,
    top: 0
  }
}))

export const ProductAddToCart = styled(Button)(({ show, theme }) => ({
  width: '120px',
  fontSize: '12px',
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: '2%',
    width: '300px',
    padding: '10px 5px',
  },
  background: Colors.secondary,
  opacity: 0.9
}))