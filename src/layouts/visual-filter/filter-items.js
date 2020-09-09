import React, { useState, useEffect } from 'react';
import { VISUAL_FILTERS, COLOR_TYPES, PRODUCT_TYPES, PRODUCT_TYPE_DETAILS } from './../../const/constant'
import Level1Item from './level1-item'
import Level2Item from './level2-item'
import Level3Item from './level3-item'
import Level4Item from './level4-item'
import './index.scss'

function FilterItems(props) {
  const { level, onItemClick, onClickViewAll } = props
  const [items, setItems] = useState(VISUAL_FILTERS)
  
  useEffect(()=> {
    switch(level) {
      case 0:
        setItems(VISUAL_FILTERS)
        break;
      case 1:
        setItems(COLOR_TYPES)
        break;
      case 2:
        setItems(PRODUCT_TYPES)
        break;
      case 3:
        setItems(PRODUCT_TYPE_DETAILS)        
        break;
    }
  }, [level])

  const onClick = (item, data) => {
    if(item.subCategory && item.subCategory.length > 0) {
      setItems(item.subCategory)
    } else {
      onItemClick(data)
    }
  }
  
  const renderItems = () => {
    let result = []
    items.forEach((el, index) => {
      switch(level) {
        case 0:
          result.push(<Level1Item key={index} item={el} onItemClick={onClick}/>)
          break;
        case 1:
          result.push(<Level2Item key={index} item={el} onItemClick={onClick}/>)
          break;
        case 2:
          result.push(<Level3Item key={index} item={el} onItemClick={onClick}/>)
          break;
        case 3:
          result.push(<Level4Item key={index} item={el} onItemClick={onClick}/>)
          break;
      }
    });
   
    return result;
  }

  const renderViewAllButton = () => {
    let result = []
    if (level == 2 || level == 3) {
      result = <li className='view-all' onClick={onClickViewAll}>VIEW ALL</li>
    }
    return result
  } 

  return(
    <div className='h-100'>
      <ul className='filter-items'>
        {renderItems()}
        {renderViewAllButton()}
      </ul>
    </div>
  )
}

export default FilterItems