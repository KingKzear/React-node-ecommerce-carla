import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import Presentation from './present'
import ShopNowButton from '../elements/btn-shop-now';
import './index.scss'

function PopularProducts(props) {
  const categoryImg = 'http://35.196.33.142:8060/ccb7dc9d950c46b880c9a733ab8ac9d2.png'

  const imageUrls = [
    'http://35.196.33.142:8060/56927a6ec808e959aada68b71f3d23e0.png',
    'http://35.196.33.142:8060/7667b325dce56975c48e3898ae058410.png',
    'http://35.196.33.142:8060/476259ad8de3752c96ddbf4fe8f4e16f.png',
    'http://35.196.33.142:8060/56927a6ec808e959aada68b71f3d23e0.png',
  ]

  const onClick = () => {

  }
  
  return(
    <Row className='popular-container'>
      <Col sm={12} className='popular-mobile d-md-none d-block'></Col>
      <Col sm={5} className='popular-land d-md-block d-none land-left'>
        <div className='img-wrapper'>
          <img src={categoryImg} className='w-100 h-100'/>
          <div className='item-caption'>
            <div className='title'>CELESTIAL STYLES</div>
            <div className='note'>The always popular style is a best selling trend!</div>
            <ShopNowButton caption={'SHOP NOW'} onClick={onClick}/>
          </div>
        </div>
      </Col>
      <Col sm={7} className='popular-land d-md-block d-none land-right'>
        <Presentation imageUrls={imageUrls}/>
      </Col>
    </Row>
  )
}

export default PopularProducts