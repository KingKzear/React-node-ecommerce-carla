import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Main from './../../../components/container'
import Card from './../elements/card'
import './../index.scss'

function MeetMakers(props) {
  const renderContents = () => {
    const data = [
      {
        url: 'https://carlacorp.com/wp-content/uploads/2017/05/Georgina_tan.jpg',
        name: 'GEORGINA',
        description: 'The best hands in our wax cleaning department, Georgina has the sweetest smile she greets you with everyday.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2017/05/Joe_tan.jpg',
        name: 'JOE',
        description: 'Joe serves as our Production Manager, scheduling how and when the styles get manufactured.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2017/05/Maggie_tan.jpg',
        name: 'MAGGIE',
        description: ''
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2017/05/Simon-Tan.jpg',
        name: 'SIMON',
        description: ''
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2017/05/Linda_Tan.jpg',
        name: 'LINDA',
        description: ''
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2017/05/David_tan.jpg',
        name: 'DAVID',
        description: ''
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2017/05/JoeR-Tan.jpg',
        name: 'JOE R.',
        description: ''
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2017/05/Linton_Tan.jpg',
        name: 'LINTON',
        description: ''
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2017/05/Joey-tan.jpg',
        name: 'WAX',
        description: ''
      },
    ]

    let result = []
    let subResult = []
    data.forEach((el, index) => {
      if(index > 0 && index % 3 == 0){
        result.push(<Row>{subResult}</Row>)
        subResult = []
        subResult.push(<Card key={index} item={el} centerAligned={true} rowCount={3}/>)
      } else if(index == data.length - 1) {
        subResult.push(<Card key={index} item={el} centerAligned={true} rowCount={3}/>)
        result.push(<Row>{subResult}</Row>)
      } else {
        subResult.push(<Card key={index} item={el} centerAligned={true} rowCount={3}/>)
      }   
    })

    return result;
  }
  return(
    <Main>
      <div className='about-us-container'>
        <Container className='body'>
          <div className='content'>
            {renderContents()}
          </div>
        </Container>
      </div>
    </Main>
  )
}

export default MeetMakers