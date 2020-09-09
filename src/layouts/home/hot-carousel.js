import React, { useState, useEffect } from 'react';
import { HotProduct } from '../../components/product/hot-product';
import './index.scss'

function HotCarousel(props) {
  const [pageIndex, setPageIndex] = useState(0)
  const shopStyleImgs = [
    {
      productId: '1122',
      note: '#1 SELLING STYLE OF EARRINGS',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://c.zmags.com/assets/images/5f242e1678264920322351d2_910x448.jpeg',
      type: 'social'
    },      
    {
      productId: '1123',
      note: '#1 SELLING STYLE OF EARRINGS 2',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://c.zmags.com/assets/images/5f2809ab705c6970cbef97e7_720x450.jpeg',
      type: 'shop'
    },
    {
      productId: '1124',
      note: '#1 SELLING STYLE OF EARRINGS 2',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://c.zmags.com/assets/images/5f2809ab705c6970cbef97e7_720x450.jpeg',
      type: 'shop'
    },
    {
      productId: '1122',
      note: '#1 SELLING STYLE OF EARRINGS',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://c.zmags.com/assets/images/5f242e1678264920322351d2_910x448.jpeg',
      type: 'social'
    },      
    {
      productId: '1123',
      note: '#1 SELLING STYLE OF EARRINGS 2',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://c.zmags.com/assets/images/5f2809ab705c6970cbef97e7_720x450.jpeg',
      type: 'shop'
    },
    {
      productId: '1124',
      note: '#1 SELLING STYLE OF EARRINGS 2',
      productName: 'Shop 14KT ‌Yellow Gold Hoop Earrings',
      url: 'https://c.zmags.com/assets/images/5f2809ab705c6970cbef97e7_720x450.jpeg',
      type: 'shop'
    },
  ]

  useEffect(()=>{
    const pageLength = Math.ceil(shopStyleImgs.length / 5)

    const interval = setInterval(function() {
  
      if(shopStyleImgs.length > 0 && pageIndex == pageLength - 1) {
        setPageIndex(0)
      } else {
        setPageIndex(pageIndex + 1)
      }
    }, 2000)
    return () => clearInterval(interval);
  },[])


  const renderHotProducts = () => {
    let result = []
    shopStyleImgs.forEach((el, index) => {
      if(index >= pageIndex * 5 && index < (pageIndex + 1) * 5 )
        result.push(<HotProduct product={el}></HotProduct>)
    });
    return <div>{result}</div>;
  }

  const renderContent = () => {
    if(shopStyleImgs.length == 0)
      return []
    else
      return renderHotProducts()
  }

  return(
    <>{renderContent()}</>
  )
}

export default HotCarousel