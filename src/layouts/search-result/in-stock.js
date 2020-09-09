import React, { useState, useEffect } from 'react';
import CustomLabel from './../../components/elements/custom-label'
import './index.scss'

function InStock(props) {
  const [value, setValue] = useState('')

  const onChange = (evt) => {
    console.log(evt.target.value)
    setValue(evt.target.value)
  }
  
  return(
    <div className='bordered-container'>
      <div>
        <input type="radio" value="all" checked={value=='all'} onChange={onChange}/>
        <CustomLabel position='right'>All Items</CustomLabel>
      </div>
      <div>
        <input type="radio" value='in_stock' checked={value=='in_stock'} onChange={onChange}/>
        <CustomLabel position='right'>In Stock</CustomLabel>
      </div>
    </div>
  )
}

export default InStock