import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import './../index.scss'

export function OptionCarousel(props) {
  
  const renderCarouselItems = () => {
    const data = [
      {
        title: '2-SIDED COUNTERTOP UNIT',
        url: 'https://c.zmags.com/assets/images/5c190da8dbec833189314d0f_960x800.jpeg',
        desc: [
          'Measures 27"H x 14.5"W x 9.5"D',
          'Measures 27"H x 14.5"W x 9.5"D',
          'Measures 27"H x 14.5"W x 9.5"D',
          'Measures 27"H x 14.5"W x 9.5"D',
          'Measures 27"H x 14.5"W x 9.5"D'
        ],
        sku: '80/921 COST: $200'
      }, {
        title: 'IN-COUNTER UNIT #2',
        url: 'https://c.zmags.com/assets/images/5c17deff534c06157376c8b3_720x450.png',
        desc: [
          'Measures 26"W x 16.5"D',
          'Beautiful Charcoal and Tan Color Theme.',
          'Beautiful Charcoal and Tan Color Theme.',
          'Measures 26"W x 16.5"D',
        ],
        sku: '80/908-ALL COST: $200'
      }
    ]

    let result = []
    data.forEach((el, index) => {
      result.push(getCarouselItem(el))
    });
    return result;
  }

  const getCarouselItem = (item) => {
    
    const renderListItem = () => {
      let result = []
      item.desc.forEach((el, index) => {
        result.push(<li key={index}>{el}</li>)
      });
      return result;
    }
  
    return(
      <Carousel.Item>
        <div className='item-container'>
          <div className='img-container'>
            <img src={item.url} />
          </div>
          <div className='caption'>
            <div className='title'>{item.title}</div>
            <div className='desc'>
              <ul>
                {renderListItem()}
              </ul>
            </div>
            <div className='sku'>
              <span>SKU:</span>{item.sku}
            </div>
          </div>
        </div>
      </Carousel.Item>
    )
  }

  return(
    <div className='option-carousel'>
      <Carousel
      prevIcon={<ChevronLeft />}
      nextIcon={<ChevronRight />}
      >
        {renderCarouselItems()}
      </Carousel>
    </div>
  )
}

