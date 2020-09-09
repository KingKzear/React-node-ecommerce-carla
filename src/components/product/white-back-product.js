import React, { useState } from 'react';
import './index.scss'
import { Col } from 'react-bootstrap'
import { ChevronRight } from '@material-ui/icons';

function WhiteBackProduct(props) {
  const { product } = props
  
  const onClick = () => {

  }

  return(
    <Col className='white-back-product' md={3} sm={6}>
      <div className='image'>
        <img src={product.url}/>
      </div>
      <div className='caption'>
        <div className='title'>NEW ARRIVAL</div>
        <div className='white-btn' onClick={onClick}><span>SHOP NOW</span><ChevronRight /></div>
      </div>
    </Col>
  )
}

export default WhiteBackProduct