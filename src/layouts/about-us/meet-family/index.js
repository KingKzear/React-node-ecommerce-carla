import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import Main from './../../../components/container'
import Card from './../elements/card'
import './../index.scss'

function MeetFamily(props) {
  const pageTopUrl = './resources/FAMILY_SLIDER_1-1024x581.png'
  
  const renderContents = () => {
    const data = [
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/MrFleming.jpg',
        name: 'RALPH FLEMING JR.',
        description: "Shortly after the company was founded in 1965 Ralph Fleming Jr. joined the company as its New England sales representative. He was responsible for implementing most of the customer friendly polices we still have today, like same day shipping, the ability to purchase half pairs of earrings, and many others. Mr. Fleming retired in the early 2000's but continues to serves as the company's Chairman."
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/Ralph2-470x313.jpg',
        name: 'RALPH FLEMING III',
        description: "Right out of high school in 1988 Ralph III joined the family business learning every aspect of jewelry manufacturing from the ground up. During the 90's Ralph brought both the electroform and loss wax casting processes into the company. Like his Grandfather, Ralph III has manufacturing in his heart and mind. Currently he serves as the company's President and COO."
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/Brian1-470x313.jpg',
        name: 'BRIAN FLEMING',
        description: "Serving as our Vice President and Head of Sales, Brian is the Ambassador of Carla Corporation. In 1988 Brian also joined the family business after graduating Bentley College. Carla would not be where it is today if it did not realize the importance of its customers, which is why Brian would like to meet every single one of them! He instills our company legacy into our story reinforcing our brand to our retailers."
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/Lori1-470x313.jpg',
        name: 'LORI PEZZULLO',
        description: "As a grandchild of Nicholas DeCristofaro, Lori works in Carla's Credit and Returns Department. Her energy is electric to all around her. She understands the importance of our customers needs. Carla's lifetime guarantee is often tested and Lori has one simple goal - making you and your customers happy!"
      },
      {
        url: 'https://carlacorp.com/wp-content/uploads/2015/02/Jen_Final.png',
        name: 'JENNIFER HUBBARD',
        description: "As a grandchild of Nicholas DeCristofaro, Jennifer brings a definite sense of cheer to Carla's Customer Relations Department. She will brighten your day just as she does to all those around her. It is her spirit and hard work that makes her position in Customer Relations so successful."
      }   
    ]

    let result = []
    let subResult = []
    result.push(
      <Row key={0}>
        <Card item={data[0]} rowCount={1} centerAligned={true}/>
      </Row>
    )
    data.splice(0, 1)
    data.forEach((el, index) => {
      if(index == 0 || index % 2 == 0) {
        subResult.push(<Card item={el} rowCount={2}/>)
      } else if( index % 2 == 1 || index == data.length - 1) {
        subResult.push(<Card item={el} rowCount={2}/>)
        result.push(<Row key={index}>{subResult}</Row>)
        subResult = []
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
              Meet The Family
            </h2>
            <p className='header-desc'>
              For 50 years, Carla Corp. has continued its journey as a family owned and operated American Made Company. In 1965 Nicholas DeCristofaro Sr. founded the company with the hopes of one day passing down the company for generations to come. With his son in law Ralph Fleming Jr. and son Nicholas DeCristofaro Jr. joining, the company continued to grow throughout the 70’s and 80’s. Continuing with the family tradition, Nicholas’ grandsons, Brian Fleming and Ralph Fleming III, joined the company in the late 80’s and now serve as the President and Vice President of the company.
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

export default MeetFamily