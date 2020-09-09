import React, { useState } from 'react';
import './index.scss'

function Level3Item(props) {
  const { item, onItemClick } = props

  const onClick = (productType) => {
    onItemClick({productType: productType})
  }

  return(
    <li className='level-3-item' onClick={()=>onClick(item.type)}>
      <div className='img-container'>
       <img src={item.url} className='w-100'/>
      </div>
      <div className='caption'>
        {item.label}
      </div>
    </li>
  )
}

export default Level3Item