import React, { useState, useEffect } from 'react';
import './../index.scss'

function Card(props) {
  const { item, centerAligned, rowCount } = props

  const getRowCount = () => {
    if (rowCount) {
      return `${100 / rowCount}%`
    } else {
      return '100%'
    }
  }

  return (
    <div className='card-item' style={{ width: getRowCount() }}>
      <div className='image-container'>
        <img src={item.url} className='w-100' />
      </div>
      <div className={`name ${centerAligned ? 'center' : ''}`} style={{ color: '#999' }}>{item.name}</div>
      <div className='desc'>{item.description}</div>
    </div>
  )
}

export default Card