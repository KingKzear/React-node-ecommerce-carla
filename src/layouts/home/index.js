import React from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import CarouselComponent from './carousel'
import ParticularProduct from '../../components/product/particular-product';
import PopularProducts from './../../components/product/popular'
import NewArrival from './../../components/product/new-arrival'
import LearnMore from './learn-more'
import Main from './../../components/container'
import './index.scss'

function HomePage(props) {
  const shopStyleImgs = [
    {
      productId: '1122',
      note: '#1 SELLING STYLE OF EARRINGS',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'http://35.196.33.142:8060/7667b325dce56975c48e3898ae058410.png',
      type: 'social'
    },      
    {
      productId: '1123',
      note: '#1 SELLING STYLE OF EARRINGS 2',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'http://35.196.33.142:8060/328e099d4b66d9a9eec3d21df74223cc.png',
      type: 'shop'
    },
    {
      productId: '1124',
      note: '#1 SELLING STYLE OF EARRINGS 2',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'http://35.196.33.142:8060/476259ad8de3752c96ddbf4fe8f4e16f.png',
      type: 'shop'
    },
  ]

  return(
    <Main>
      <div className='home-container'>
        <Container>
          <div className='carousel-container'>
            <CarouselComponent />
          </div>
        </Container>
        <Container>
          <PopularProducts />
        </Container>
        <Container>
          <div className='carousel-container'>
            <CarouselComponent />
          </div>
        </Container>
        <Container>
          <ParticularProduct />
        </Container>
        <Container>
          <NewArrival />
        </Container>
        <Container>
          <LearnMore />
        </Container>
      </div>
    </Main>
  )
}

export default HomePage