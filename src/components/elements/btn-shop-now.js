import React, { useEffect, useState } from 'react';
import { ChevronRight } from '@material-ui/icons'
import './index.scss'

function ShopNowButton(props) {
  const { onClick, caption } = props  
  return(
    <> 
      <div className='button' onClick={onClick}><span>{caption}</span><ChevronRight /></div>
    </>
  )
}

export default ShopNowButton