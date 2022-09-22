import { Favorite, Share } from '@mui/icons-material';
import { Stack } from '@mui/material'
import React from 'react'
import {
  Product,
  ProductActionsWrapper,
  ProductImage,
  ProductFavButton,
  ProductActionButton
} from '../../styles/products';
import ProductMeta from './ProductMeta'

const SingleProduct = ({ product, matches }) => {



  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction={'row'}>
            <ProductFavButton isfav={1}>
              <Favorite />
            </ProductFavButton>
            <ProductActionButton>
              <Share color='primary' />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
    </>
  )
}

export default SingleProduct