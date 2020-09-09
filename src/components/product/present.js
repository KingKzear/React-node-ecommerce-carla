import React, { useState, useEffect } from 'react';
import ImageCarousel from './image-carousel'

function Presentation(props) {
  const { imageUrls } = props

  return(
    <div className='w-100 h-100'>
      <ImageCarousel imageUrls={imageUrls}/>
    </div>
  )
}

export default Presentation