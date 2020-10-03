import React, { useState, useEffect } from 'react';
import WhiteBackProduct from './white-back-product'
import { Carousel, Row } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import './index.scss'

function NewArrival(props) {
  const data = [
    {
      productId: '1122',
      note: '#1 SELLING STYLE OF EARRINGS',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://c.zmags.com/assets/images/5d545f63ad04230f4a9e8faa_300x300.jpeg',
      type: 'social'
    },
    {
      productId: '1123',
      note: '#1 SELLING STYLE OF EARRINGS 2',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://c.zmags.com/assets/images/5c3792edad0423398c79c184-optimized.jpeg',
      type: 'shop'
    },
  ]

  const renderContent = () => {
    let result = []

    data.forEach((el, index) => {
      let subResult = []
      for (let i = 0; i < 4; i++) {
        subResult.push(<WhiteBackProduct key={i} product={el} />)
      }
      result.push(<Carousel.Item><Row>{subResult}</Row></Carousel.Item>)
    });
    if (result.length == 0)
      return result
    else
      return <Carousel
        prevIcon={<ChevronLeft />}
        nextIcon={<ChevronRight />}
      >
        {result}
      </Carousel>
  }

  return (
    <div className='gallery-page'>
      {renderContent()}
    </div>
  )
}

export default NewArrival