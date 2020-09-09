import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Main from './../../../components/container'
import Card from './../elements/card'
import './../index.scss'

function History(props) {
  const pageTopUrl = 'https://carlacorp.com/wp-content/uploads/2016/09/HistorySlider_1.jpg'
  return(
    <Main>
      <div className='about-us-container'>
        <div className='page-top'>
          <img src={pageTopUrl} className='w-100' />
        </div>
      </div>
    </Main>
  )
}

export default History