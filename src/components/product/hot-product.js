import React, { useState } from 'react';
import ShopNowButton from '../elements/btn-shop-now';
import './index.scss'

function HotProduct(props) {
  const { product } = props
  
  const onClick = () => {

  }

  return(
    <div className='hot-product'>
      <div className='image'>
        <img src={product.url}/>
      </div>
      <div className='caption'>
        <div className='title'>{product.productName}</div>
        <div className='note'>{product.note}</div>
        <ShopNowButton caption={'SHOP NOW'} onClick={onClick} />
      </div>
    </div>
  )
}

export default HotProduct