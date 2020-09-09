import React, { useState } from 'react';
import './index.scss'

function Level1Item(props) {
  const { item, onItemClick } = props

  const onClick = (category) => {
    onItemClick(item, {category: category})
  }

  return(
    <li className='level-1-item' onClick={()=>onClick(item.category)}>
      <div className='img-container'>
        <img src={item.url}/>
      </div>
      <div className='caption'>
        {item.label}
      </div>
    </li>
  )
}

export default Level1Item