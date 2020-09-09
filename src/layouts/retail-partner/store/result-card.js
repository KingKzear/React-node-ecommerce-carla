import React, { useState } from 'react';
import {ArrowDropDown, ArrowDropUp} from '@material-ui/icons'
import './../index.scss'

function ResultCard(props) {
  const { item } = props
  const [open, setOpen] = useState(false)

  const onClickOpen = () => {
    setOpen(!open)
  }

  return(
    <div className='result-card'>
      <div className='title'>{item.title}</div>
      <div className='address'>
        <p>{item.street}</p>
        <p>{item.city}</p>
        <p>{item.country}</p>
      </div>
      <div className='phone'><b>Phone:</b> {item.phone}</div>
      <div className='more-info'><b>More Info:</b>{!open ? <ArrowDropDown onClick={onClickOpen}/> : <ArrowDropUp onClick={onClickOpen}/>}</div>
      {open &&
      <div className='more-info-content'>
          <div className='more-info-title'>Hours</div>
          <p><span>Tues-Wed</span><span>9AM - 5.30PM</span></p>
          <p><span>Thurs</span><span>9AM - 7PM</span></p>
          <p><span>Fri</span><span>9AM - 5.30PM</span></p>
          <p><span>Sat</span><span>9AM - 4.30PM</span></p>
          <p><span>Sun-Mon</span><span> Closed</span></p>
      </div>
      }
      <div className='distance'>{item.distance}mi</div>
    </div>
  )
}

export default ResultCard