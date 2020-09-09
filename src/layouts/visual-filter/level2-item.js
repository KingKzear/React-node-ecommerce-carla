import React, { useState } from 'react';
import './index.scss'

function Level2Item(props) {
  const { item, onItemClick } = props

  const onClick = (colorType) => {
    onItemClick({colorType: colorType})
  }

  return(
    <li className='level-2-item' onClick={()=>onClick(item.colorType)}>
      <div className='color-panel' style={{backgroundColor: item.color != '' ? item.color : '', opacity: item.colorType=='ss' ? 0.8 : 1}}>
        {item.color == '' && 
        <>
          <span className='two-tone-left h-100'></span>
          <span className='two-tone-right h-100'></span>
        </>
        }
      </div>
      <div className='caption'>
        {item.label}
      </div>
    </li>
  )
}

export default Level2Item