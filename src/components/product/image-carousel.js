import React, { useEffect, useState, createRef } from 'react';
import { Carousel } from 'react-bootstrap'
import './index.scss'

function ImageCarousel(props) {
  const { imageUrls } = props

  const renderContent = () => {
    if (imageUrls.length == 0) return []
    let result = []
    imageUrls.forEach((el, index) => {
      result.push(
        <div className='carousel-item' key={index}>
          <img
            className="d-block w-100 h-100 carousel-image"
            src={el}
            key={index + 1}
          />
        </div>
      )
    });
    return <Carousel>{result}</Carousel>
  }

  return (
    <>{renderContent()}</>
  )
}

export default ImageCarousel