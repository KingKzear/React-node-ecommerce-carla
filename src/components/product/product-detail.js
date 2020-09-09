import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap'

function ProductDetail(props) {
  const { product } = props

  return(
    <Col className ='product-detail' sm={4} xs={12}>
      <div className='img-container'>
        <img src={product.url} />
      </div>
      <div className='caption'>
        <div className='model'>{product.productId}</div>
        <div className='product-name'>{product.productName}</div>
      </div>
    </Col>
  )
}

export default ProductDetail