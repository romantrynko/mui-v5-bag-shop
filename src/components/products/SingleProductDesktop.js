import { Favorite, Share, Subject } from '@mui/icons-material';
import { Stack } from '@mui/material'
import React, { useState } from 'react'
import {
  Product,
  ProductActionsWrapper,
  ProductImage,
  ProductFavButton,
  ProductActionButton,
  ProductAddToCart
} from '../../styles/products';
import ProductMeta from './ProductMeta'
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetails from '../product-detail';

const SingleProductDesktop = ({ product, matches }) => {

  const [showOptions, setShowOptions] = useState(false);

  const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetails)

  const handleMouseEnter = () => {
    setShowOptions(true)
  }

  const handleMouseLeave = () => {
    setShowOptions(false)
  }

  return (
    <React.Fragment>
      <Product
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProductImage src={product.image} />

        <ProductFavButton isfav={0}>
          <Favorite />
        </ProductFavButton>

        {
          showOptions && <ProductAddToCart
            show={showOptions}
            variant='contained'>
            Add to cart
          </ProductAddToCart>
        }


        <ProductActionsWrapper show={showOptions}>
          <Stack direction={'column'}>
            <ProductActionButton>
              <Share color='primary' />
            </ProductActionButton>

            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Subject color='primary' />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>

      </Product>

      <ProductDetailDialog product={product} />

      <ProductMeta product={product} matches={matches} />
    </React.Fragment>
  )
}

export default SingleProductDesktop