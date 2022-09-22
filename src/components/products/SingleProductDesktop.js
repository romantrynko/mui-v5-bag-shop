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

const SingleProductDesktop = ({ product, matches }) => {

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true)
  }

  const handleMouseLeave = () => {
    setShowOptions(false)
  }

  return (
    <>
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

            <ProductActionButton>
              <Subject color='primary' />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>

      </Product>

      
      <ProductMeta product={product} matches={matches} />
    </>
  )
}

export default SingleProductDesktop