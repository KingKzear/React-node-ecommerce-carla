import React, { useState, useEffect } from 'react';
import Main from './../../../components/container'
import { OptionCarousel } from './option-carousel'
import CustomDisplay from './custom-display';
import './../index.scss'

function DisplayOption(props) {
  const pageTopUrl = 'https://c.zmags.com/assets/images/5bf5ae34dbec834554b3ee37-optimized.jpeg'
  
  const renderCustomDisplayItems = () => {
    const data = [
      {
        title: 'CUSTOMIZE YOUR IN-COUNTER DISPLAY',
        data: [
          {
            url: 'https://c.zmags.com/assets/images/5c1944f4dbec8331893192a9_480x320.jpeg',
            sku: '80/899-W',
            desc: 'NEW! Cream colored Birthstone Necklace and Earring Display. Fits 12 Necks and 12 Earrings.'
          },
          {
            url: 'https://c.zmags.com/assets/images/5c1944f7534c06157377ab56_480x320.jpeg',
            sku: '80/899-G',
            desc: 'NEW! Birthstone Necklace and Earring Display. Fits 12 Necks and 12 Earrings.'
          },
          {
            url: 'https://c.zmags.com/assets/images/5c17d15edbec833189309c45_300x300.png',
            sku: '80/903',
            desc: 'Medium Necklace Bust. Fits 1-2 Necklaces.'
          },
          {
            url: 'https://c.zmags.com/assets/images/5c190653dbec8331893140c2_300x300.png',
            sku: '80/903-LG',
            desc: 'Large Necklace Bust Measures 7"W x 5"D x 12"H. Fits up to 24"-30" Necklaces'
          },
          {
            url: 'https://c.zmags.com/assets/images/5c17d14ddbec833189309c33_300x300.png',
            sku: '80/904',
            desc: 'Two Tier Earring Display. Holds 4 Pairs of Earrings. We recommend Drop Earrings or large hoops for this display option.'
          }
        ]

      },
      {
        title: 'CUSTOMIZE YOUR IN-COUNTER DISPLAY',
        data: [
          {
            url: 'https://c.zmags.com/assets/images/5c1944f4dbec8331893192a9_480x320.jpeg',
            sku: '80/899-W',
            desc: 'NEW! Cream colored Birthstone Necklace and Earring Display. Fits 12 Necks and 12 Earrings.'
          },
          {
            url: 'https://c.zmags.com/assets/images/5c1944f7534c06157377ab56_480x320.jpeg',
            sku: '80/899-G',
            desc: 'NEW! Birthstone Necklace and Earring Display. Fits 12 Necks and 12 Earrings.'
          },
          {
            url: 'https://c.zmags.com/assets/images/5c17d15edbec833189309c45_300x300.png',
            sku: '80/903',
            desc: 'Medium Necklace Bust. Fits 1-2 Necklaces.'
          },
          {
            url: 'https://c.zmags.com/assets/images/5c190653dbec8331893140c2_300x300.png',
            sku: '80/903-LG',
            desc: 'Large Necklace Bust Measures 7"W x 5"D x 12"H. Fits up to 24"-30" Necklaces'
          },
          {
            url: 'https://c.zmags.com/assets/images/5c17d14ddbec833189309c33_300x300.png',
            sku: '80/904',
            desc: 'Two Tier Earring Display. Holds 4 Pairs of Earrings. We recommend Drop Earrings or large hoops for this display option.'
          }
        ]

      }
      
    ]
    let result = []
    data.forEach((el, index) => {
      result.push(<CustomDisplay key={index} item={el} />)
    });
    return result;
  }

  return(
    <Main>
      <div className='display-option-container'>
        <div className='page-top w-100'>
          <img src={pageTopUrl} className='w-100' />
          <div className='title'><h1>DISPLAY OPTION</h1></div>
        </div>
        <div className='body'>  
          <OptionCarousel />
          <>
          {renderCustomDisplayItems()}
          </>
        </div>
      </div>
    </Main>
  )
}

export default DisplayOption