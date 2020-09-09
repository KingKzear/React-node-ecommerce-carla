import React, { useState, useEffect } from 'react';
import Main from './../../components/container'
import { Container, Row } from 'react-bootstrap'
import CategoryItem from './category-item'
import './index.scss'

function DigitalCategory(props) {
  const mainUrl = 'https://c.zmags.com/assets/images/5d02a59efaf7ea08535b4905-optimized.jpeg'

  const renderBottomItems = () => {
    const data = [
      {
        duration: '2018',
        url: 'https://c.zmags.com/assets/images/5c019b3a534c061717f4aa5e_300x300.jpeg',
        label: 'NEW ARRIVALS'
      },
      {
        duration: '2017',
        url: 'https://c.zmags.com/assets/images/5c01a321534c061717f4b1b6_300x300.jpeg',
        label: 'NEW ARRIVALS'
      },
      {
        duration: '2016-2017',
        url: 'https://c.zmags.com/assets/images/5c11427dad04237e5366ec29_300x300.jpeg',
        label: 'NANCY B CATALOG'
      },
      {
        duration: '2016-2017',
        url: 'https://c.zmags.com/assets/images/5c01a325dbec8372a9b2c932_300x300.jpeg',
        label: 'CARLA CATALOG'
      }
    ]

    let result = []
    data.forEach((el, index) => {
      result.push(<CategoryItem key={index} item={el}/>)
    });
    return result;
  }

  return(
    <Main>
      <Container className='digital-category-container'>
        <div className='top'>
          <div className='main-image'>
            <img src={mainUrl} className='w-100'/>
            <div className='button'>SHOP NOW</div>
          </div>
          <div className='warning'>Retailers: Please remember to LOGIN before shopping the Digital Catalogs (LOGIN HERE)</div>
        </div>
        <Row className='bottom'>
          {renderBottomItems()}
        </Row>
      </Container>
    </Main>
  )
}

export default DigitalCategory