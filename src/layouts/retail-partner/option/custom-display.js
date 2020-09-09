import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap'
import CustomDisplayItem from './custom-display-item'
import './../index.scss'

function CustomDisplay(props) {
  const { item } = props

  const renderItems = () => {
    let result = []
    if(!item.data || item.data.length == 0) return result;

    let subResult = []
    item.data.forEach((el, index) => {
      if(index > 0 && index % 3 == 0){
        result.push(<Row>{subResult}</Row>)
        subResult = []
        subResult.push(<CustomDisplayItem key={index} item={el}/>)
      } else if(index == item.data.length - 1) {
        subResult.push(<CustomDisplayItem key={index} item={el}/>)
        result.push(<Row>{subResult}</Row>)
      } else {
        subResult.push(<CustomDisplayItem key={index} item={el}/>)
      }   
    })

    return result;
    
  }

  return(
    <div className='custom-displays'>
      <div className='title'>{item.title}</div>
      <>
      {renderItems()}
      </>
    </div>
  )
}

export default CustomDisplay