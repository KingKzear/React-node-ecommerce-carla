import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap'
import './../index.scss'

function CustomDisplayItem(props) {
  const { item } = props

  return(
    <Col md={4}>
      <div className='custom-display-item' >
        <div className='img-container'>
          <img src={item.url}/>
        </div>
        <div className='caption'>
          <div className='sku'>{item.sku}</div>
          <div className='desc'>{item.desc}</div>
        </div>
      </div>
    </Col>
  )
}

export default CustomDisplayItem