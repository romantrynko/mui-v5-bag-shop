import { Favorite, Share, Subject } from '@mui/icons-material';
import { Stack } from '@mui/material'
import React from 'react'
import {
  Product,
  ProductActionsWrapper,
  ProductImage,
  ProductFavButton,
  ProductActionButton,
  ProductAddToCart
} from '../../styles/products';
import ProductMeta from './ProductMeta'

const SingleProduct = ({ product, matches }) => {



  return <>
    <Product>
      <ProductImage src={product.image} />
      <ProductMeta product={product} matches={matches} />
      <ProductActionsWrapper>
        <Stack direction={'row'}>
          <ProductFavButton isfav={0}>
            <Favorite />
          </ProductFavButton>
          <ProductActionButton>
            <Share color='primary' />
          </ProductActionButton>
          <ProductActionButton>
            <Subject color='primary' />
          </ProductActionButton>
        </Stack>
      </ProductActionsWrapper>
    </Product>
    <ProductAddToCart variant='contained'>Add to cart</ProductAddToCart>
  </>
}

export default SingleProduct