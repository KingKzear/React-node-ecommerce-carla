import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Main from './../../../components/container'
import Card from './../elements/card'
import './../index.scss'

function OurProcess(props) {
  const pageTopUrl = 'http://35.196.33.142:8060/439818aa0318c06a3113713640b80603.png'
  
  const renderContents = () => {
    const data = [
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/WAX.jpg',
        name: 'WAX',
        description: 'Using a rubber mold and heated wax, we inject the wax into the mold to create a pattern for our other processes. Each piece is then cleaned by hand to create a high-quality model.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/CASTING.jpg',
        name: 'LOST WAX CASTING',
        description: 'After building a tree of plastic patterns, we insert the tree into a canister, which is then filled with a plaster-like substance. During the heating process, the patterns melt and evaporate leaving negative images within the plaster. We then melt gold or silver and using a casting machine, inject it into the canister to fill in the negative images.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/CASTING.jpg',
        name: 'LOST WAX CASTING',
        description: 'After building a tree of plastic patterns, we insert the tree into a canister, which is then filled with a plaster-like substance. During the heating process, the patterns melt and evaporate leaving negative images within the plaster. We then melt gold or silver and using a casting machine, inject it into the canister to fill in the negative images.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/WAX.jpg',
        name: 'WAX',
        description: 'Using a rubber mold and heated wax, we inject the wax into the mold to create a pattern for our other processes. Each piece is then cleaned by hand to create a high-quality model.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/WAX.jpg',
        name: 'WAX',
        description: 'Using a rubber mold and heated wax, we inject the wax into the mold to create a pattern for our other processes. Each piece is then cleaned by hand to create a high-quality model.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/CASTING.jpg',
        name: 'LOST WAX CASTING',
        description: 'After building a tree of plastic patterns, we insert the tree into a canister, which is then filled with a plaster-like substance. During the heating process, the patterns melt and evaporate leaving negative images within the plaster. We then melt gold or silver and using a casting machine, inject it into the canister to fill in the negative images.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/CASTING.jpg',
        name: 'LOST WAX CASTING',
        description: 'After building a tree of plastic patterns, we insert the tree into a canister, which is then filled with a plaster-like substance. During the heating process, the patterns melt and evaporate leaving negative images within the plaster. We then melt gold or silver and using a casting machine, inject it into the canister to fill in the negative images.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/WAX.jpg',
        name: 'WAX',
        description: 'Using a rubber mold and heated wax, we inject the wax into the mold to create a pattern for our other processes. Each piece is then cleaned by hand to create a high-quality model.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/WAX.jpg',
        name: 'WAX',
        description: 'Using a rubber mold and heated wax, we inject the wax into the mold to create a pattern for our other processes. Each piece is then cleaned by hand to create a high-quality model.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/CASTING.jpg',
        name: 'LOST WAX CASTING',
        description: 'After building a tree of plastic patterns, we insert the tree into a canister, which is then filled with a plaster-like substance. During the heating process, the patterns melt and evaporate leaving negative images within the plaster. We then melt gold or silver and using a casting machine, inject it into the canister to fill in the negative images.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/CASTING.jpg',
        name: 'LOST WAX CASTING',
        description: 'After building a tree of plastic patterns, we insert the tree into a canister, which is then filled with a plaster-like substance. During the heating process, the patterns melt and evaporate leaving negative images within the plaster. We then melt gold or silver and using a casting machine, inject it into the canister to fill in the negative images.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/WAX.jpg',
        name: 'WAX',
        description: 'Using a rubber mold and heated wax, we inject the wax into the mold to create a pattern for our other processes. Each piece is then cleaned by hand to create a high-quality model.'
      }    
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
        <div className='page-top'>
          <img src={pageTopUrl} className='w-100' />
        </div>
        <Container className='body'>
          <div className='header'>
            <h2 className='header-title'>
              Our Process
            </h2>
            <p className='header-desc'>
              At Carla, we live by four standard principles: Quality, Service, Trust, and Dependability. All of our manufacturing is done in our main factory located in East Providence, RI or our Los Angeles, CA Design Studio. Some of our processes are unique to Carla which makes our jewelry so distinct.
            </p>
          </div>
          <div className='content'>
            {renderContents()}
          </div>
        </Container>
      </div>
    </Main>
  )
}

export default OurProcess