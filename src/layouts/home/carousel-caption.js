import React, { useEffect, useState } from 'react';
import ShopNowButton from './../../components/elements/btn-shop-now'
import './index.scss'

function CarouselCaption(props) {
  const { data, caption } = props  

  const onClick = () => {

  }

  return(
    <> 
      <h6 className='note'>{data.note}</h6>
      <div className='show-now'>
        <p className='product-name'>{data.productName}</p>
        <i className='italic-label'>Shop the collection here!</i>
        <ShopNowButton caption={'SHOP NOW'} onClick={onClick} />
      </div>
    </>
  )
}

export default CarouselCaption