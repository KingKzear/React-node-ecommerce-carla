import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import './index.scss'

function LearnProduct(props) {
  const { item } = props
  return(
    <Col md={6} className='learn-item'>
      <img src={item.url} className='w-100'/>
      <div className='caption'>
        <div className='title'>{item.note}</div>
        <div className='button'>LEARN MORE</div>
      </div>
    </Col>
  )
}

export default LearnProduct