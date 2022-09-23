import React from 'react'
import { Colors } from '../../styles/theme';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Slide } from '@mui/material';
import { Close } from '@mui/icons-material';

const SlideTransition = (props) => {
  return <Slide direction='down' {...props} />
}

const ProductDetails = ({ open, onClose, product }) => {
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
        <Box display={'flex'} alignItems='center' justifyContent='center' >
          Product title
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>

      </DialogContent>
    </Dialog>
  )
}

export default ProductDetails