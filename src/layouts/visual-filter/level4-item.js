import React, { useState } from 'react';
import './index.scss'

function Level4Item(props) {
  const { item, onItemClick } = props

  const onClick = (detailType) => {
    onItemClick({detailType: detailType})
  }

  return(
    <li className='level-4-item' onClick={()=>onClick(item.detailType)}>
      <div className='color-panel' style={{backgroundColor: item.color, border: item.detailType=='mix' ? '2px solid white' : ''}}>
        <h6 className='caption'>
          {item.label}
        </h6>
      </div>
      
    </li>
  )
}

export default Level4Item