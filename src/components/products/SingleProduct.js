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
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetails from '../product-detail';


export default function SingleProduct({ product, matches }) {

  const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetails)

  return (
    <React.Fragment>

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

            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Subject color='primary' />
            </ProductActionButton>
          </Stack>

        </ProductActionsWrapper>
        
      </Product>
      <ProductAddToCart variant='contained'>Add to cart</ProductAddToCart>
      <ProductDetailDialog product={product} />
    </React.Fragment>
  )
}
