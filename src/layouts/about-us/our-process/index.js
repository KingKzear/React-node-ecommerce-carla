import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Main from './../../../components/container'
import Card from './../elements/card'
import './../index.scss'

function OurProcess(props) {
  const pageTopUrl = './resources/Proces_Slider-1024x581.png'

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
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/PRESS.jpg',
        name: 'PRESS',
        description: 'Our different styles and shapes are created using custom dies and tools, which are made using 40-ton power presses. The presses imprint a shape into a gold or silver sheet, which is then sent to solder to be fused together.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/ELECTROFORM.jpg',
        name: 'ELECTROFORM',
        description: 'Using our wax patterns, precious metal is deposited over the wax patterns. It is a proprietary process similar to plating. Electroform gives us the ability to produce large styles that are hollow, lightweight and durable. We are the only manufacturer in the US to use this process.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/SOLDER.jpg',
        name: 'SOLDER',
        description: 'Our other components are soldered together by hand using high-intensity torches. Some are then put through a high intensity oven to seal the tacked pieces together.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/QUALITY_STAMP.jpg',
        name: 'HALLMARK',
        description: `Every piece of our jewelry is hallmarked with our signature ''quality stamp.'' Ensuring our customers that they are receiving Carla or Nancy B 14KT or Silver. It's our promise to you that it is of the quality you deserve.`
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/STONESETTING.jpg',
        name: 'STONESETTING',
        description: 'Our master craftsmen meticulously form metal prongs and bezels around precious and Semi-precious stones. Each style is individually hand made and set by our experienced stone setters both here in RI and in CA.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/WASH.jpg',
        name: 'TUBBING',
        description: 'To show our true shine, all of our products go through a tubbing process that is unique to the materials in the product. The tubs contain various abrasives to go from a raw state to a smooth finish, so they are ready to go to polish.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/POLISH.jpg',
        name: 'POLISH',
        description: 'Using a variety of buffs and compounds, our trained craftsmen polish every piece by hand to create a high-quality finish on all of our jewelry. ??'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/PLATE.jpg',
        name: 'PLATE',
        description: 'All of our jewelry is finished off with a Rhodium or Hamilton finish to give our consistent Carla / Nancy B Color. The plating process can be done at different stages depending on the stone within the style.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/GLUING-470x313.jpg',
        name: 'GLUING',
        description: 'After building a tree of plastic patterns, we insert the tree into a canister, which is then filled with a plaster-like substance. During the heating process, the patterns melt and evaporate leaving negative images within the plaster. We then melt gold or silver and using a casting machine, inject it into the canister to fill in the negative images.'
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/INSPECTION-470x313.jpg',
        name: 'INSPECT',
        description: 'After the manufacturing process, our jewelry has one more phase to go through before being shipped. Inspection is a very important process as each piece we make is thoroughly inspected by hand and signed off by one of our inspectors.'
      }
    ]

    let result = []
    let subResult = []
    data.forEach((el, index) => {
      if (index > 0 && index % 3 == 0) {
        result.push(<Row>{subResult}</Row>)
        subResult = []
        subResult.push(<Card key={index} item={el} centerAligned={true} rowCount={3} />)
      } else if (index == data.length - 1) {
        subResult.push(<Card key={index} item={el} centerAligned={true} rowCount={3} />)
        result.push(<Row>{subResult}</Row>)
      } else {
        subResult.push(<Card key={index} item={el} centerAligned={true} rowCount={3} />)
      }
    })

    return result;
  }
  return (
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