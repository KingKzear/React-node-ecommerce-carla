import React, { useEffect, useState, createRef } from 'react';
import { Carousel } from 'react-bootstrap'
import CarouselCaption from './carousel-caption';
import './index.scss'

function CarouselComponent(props) {
  const [data, setData] = useState([])

  const mainImages = [
    {
      productId: '1122',
      note: '#1 SELLING STYLE OF EARRINGS',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'http://35.196.33.142:8060/56927a6ec808e959aada68b71f3d23e0.png',
    },      
    {
      productId: '1123',
      note: '#1 SELLING STYLE OF EARRINGS 2',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'http://35.196.33.142:8060/7667b325dce56975c48e3898ae058410.png',
    },
    {
      productId: '1124',
      note: '#1 SELLING STYLE OF EARRINGS 3',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'http://35.196.33.142:8060/476259ad8de3752c96ddbf4fe8f4e16f.png',
    },
    {
      productId: '1125',
      note: '#1 SELLING STYLE OF EARRINGS 4',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'http://35.196.33.142:8060/56927a6ec808e959aada68b71f3d23e0.png',
    },
   
  ]


  useEffect(()=> {
    //TODO: 
    //replace the constant imgs when api is implemented
      setData(mainImages);
  }, [])

  const renderContent = () => {
    if(data.length == 0) return []
    console.log(data)
    let result = []
    data.forEach((el, index) => {
      result.push(
        <div className='carousel-item' key={index}>
          <img 
            className="d-block w-100 carousel-image"
            src={el.url}
            alt={el.productId}
          />
          <div className='carousel-item-caption'>
            <CarouselCaption data={el} caption='SHOP NOW'/>
          </div>
        </div>
      )
    });
    return <Carousel>{result}</Carousel>
  }

  return(
    <>{renderContent()}</>
  )
}

export default CarouselComponent