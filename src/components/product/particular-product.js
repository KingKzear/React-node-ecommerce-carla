import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import ShopNowButton from './../elements/btn-shop-now'
import './index.scss'

function ParticularProduct(props) {
  const data = [
    {
      productId: '1122',
      note: 'SHOP OUR NEW UNIQUE WRAP-AROUND EARRINGS!',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://images.creator-prod.zmags.com/image/upload/w_0.9090909090909091,h_0.9006928406466512,x_0.09090909090909091,y_0.09930715935334873,c_crop,q_auto,f_auto/c_scale,w_283/5de57609faf7ea56194b8efb.jpeg',
      type: 'social'
    },      
    {
      productId: '1123',
      note: 'SHOP OUR BIG & BOLD HOOPS!',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://images.creator-prod.zmags.com/image/upload/w_0.9090909090909091,h_0.9006928406466512,x_0.09090909090909091,y_0.09930715935334873,c_crop,q_auto,f_auto/c_scale,w_283/5de57609faf7ea56194b8efb.jpeg',
      type: 'shop'
    },
    {
      productId: '1124',
      note: 'SHOP OUR 14KT DROP EARRINGS!',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://images.creator-prod.zmags.com/image/upload/w_0.9090909090909091,h_0.9006928406466512,x_0.09090909090909091,y_0.09930715935334873,c_crop,q_auto,f_auto/c_scale,w_283/5de57609faf7ea56194b8efb.jpeg',
      type: 'shop'
    },
  ]

  const onClick = (productId) => {
    console.log('shop now for product: ', productId)
  }

  const renderContent = () => {
    let result = []
    data.forEach((el, index) => {
      result.push(
        <Col md={4} sm={12} key={index} className='particular-item'>
          <div className='particular-item-big'>
            <img src={el.url} className='w-100 h-100'/>
          </div>
          <div className='particular-item-small'>
            <div className='title'>{el.note}</div>
            <ShopNowButton caption={'SHOP NOW'} onClick={()=>onClick(el.productId)} />
          </div>
        </Col>
      )
    });
    return result;
  }

  return(
    <Row className='particular-product-container'>
      {renderContent()}
    </Row>
  )
}

export default ParticularProduct