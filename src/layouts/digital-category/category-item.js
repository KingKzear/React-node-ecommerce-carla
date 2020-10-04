import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap'
import './index.scss'

function CategoryItem(props) {
  const { item } = props

  return(
    <Col md={3} className='category-item'>
      <div className='sub-container'>
        <div className='img-container'>
          <img src={item.url} className='w-100' />
        </div>
        <div className='caption'>
          <h5>
            {item.duration}
          </h5>
          <h5>
          {item.label}
          </h5>
        </div>
      </div>
    </Col>
  )
}

export default CategoryItem