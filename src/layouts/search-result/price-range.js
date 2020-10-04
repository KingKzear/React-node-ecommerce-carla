import React, { useState, useEffect } from 'react';
import { Slider } from '@material-ui/core';
import CustomLabel from '../../components/elements/custom-label';
import './index.scss'

function PriceRange(props) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const onChange = (type, evt) => {
    if(type == 'from'){
      setFrom(evt.target.value)
    } else if(type == 'to') {
      setTo(evt.target.value)
    }
  }

  const onSliderChange = (evt, newValue) => {
    setFrom(newValue[0])
    setTo(newValue[1])
  }

  const valuetext = (value) => {
    return `$ ${value}`;
  }
  
  return(
    <div className='price-range'>
      <div className='input-values'>
        <div>
          <CustomLabel position='left'>$</CustomLabel>
          <input value={from} onChange={(evt)=>onChange('from', evt)} placeholder={0}/>
        </div>
        <div className='splitter'>-</div>
        <div>
          <CustomLabel position='left'>$</CustomLabel>
          <input value={to} onChange={(evt)=>onChange('to', evt)} placeholder={2000}/>
        </div>
      </div>
      <Slider
        value={[from, to]}
        onChange={onSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  )
}

export default PriceRange