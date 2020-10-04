import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Main from './../../../components/container'
import { DISTANCES, AREA_RESULTS } from './../../../const/constant'
import CustomLabel from './../../../components/elements/custom-label'
import ResultCard from './result-card'
import MapContainer from './google-map'
import './../index.scss'

const mapStyles = {
  width: '100%',
  height: '100%'
};


function Store(props) {
  const [area, setArea] = useState('')
  const [distance, setDistance] = useState(DISTANCES[2])
  const [requiredResults, setRequiredResults] = useState(AREA_RESULTS[2])

  const onAreaChange = (evt) => {
    setArea(evt.target.value)
  }

  const renderDistances = () => {
    let result = []
    DISTANCES.forEach((el, index) => {
      result.push(<option key={index} value={el}>{el}mi</option>)
    });
    return result
  }

  const onDistancesChange = (evt) => {
    setDistance(evt.target.value)
  }

  const renderRequiredResults = () => {
    let result = []
    AREA_RESULTS.forEach((el, index) => {
      result.push(<option key={index} value={el}>{el}</option>)
    });
    return result
  }

  const onResultsChange = (evt) => {
    setRequiredResults(evt.target.value)
  }

  const onSearchClick = () => {

  }

  const renderResultList = () => {
    const data = {
      title: 'Our Factory',
      street: "33 Sutton Ave.",
      city: "East Providence RI 02914",
      country: "United States",
      phone: '1234567890',
      distance: 0.9
    }

    let result = []
    for(let i = 0; i < 20; i++) {
      result.push(<ResultCard key={i} item={data}/>)
    }
    return result
  }

  return(
    <Main>
      <div className='retail-partner-container'>
        <div className='top'>
          <h1 className='title'>Find a Store</h1>
          <div className='form'>
            <div className='content'>
              <div>
                <CustomLabel position='left'>rhod island:</CustomLabel>
                <Form.Control as='text' value={area} onChange={onAreaChange}/>
              </div>
              <div>
                <CustomLabel position='left'>Search Radius:</CustomLabel>
                <Form.Control as="select" onChange={onDistancesChange}>
                    {renderDistances()}
                </Form.Control>
              </div>
              <div>
                <CustomLabel position='left'>Results:</CustomLabel>
                <Form.Control as="select" onChange={onResultsChange}>
                  {renderRequiredResults()}
                </Form.Control>
              </div>
              <div>
                <Button onClick={onSearchClick}>Search</Button>
              </div>
            </div>
          </div>
        </div>
        <div className='body'>
          <div className='result-list'>
            {renderResultList()}
          </div>
          <div className='map'>
            <MapContainer />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Store