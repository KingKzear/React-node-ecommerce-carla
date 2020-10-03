import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Main from './../../../components/container'
import { DISTANCES, AREA_RESULTS } from './../../../const/constant'
import CustomLabel from './../../../components/elements/custom-label'
import ResultCard from './result-card'
import MapContainer from './google-map'
import './../index.scss'
import FixedTextField from '../../../components/FixedTextField'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  withStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const CssTextField = withStyles({
  root: {
    '& label': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      // fontSize: '150%',
      alignItems: 'center',
      textAlign: 'center',

      color: ' #999',
      transform: 'translate(22px, 16px) scale(1)'
    },

    '& label.Mui-focused': {
      color: ' #999',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#999',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1px solid #999',
        borderRadius: '10px'
      },
      '&:hover fieldset': {
        borderColor: ' #999',
      },
      '&.Mui-focused fieldset': {
        borderColor: ' #999',
      },
    },
  },
})(FixedTextField);

const mapStyles = {
  width: '100%',
  height: '100%'
};

const Distances = [
  { title: '10 mi', year: 0 },
  { title: '25 mi', year: 1 },
  { title: '50 mi', year: 2 },
  { title: '100 mi', year: 3 },
  { title: '200 mi', year: 4 },
  { title: '500 mi', year: 5 },
]

const requiredresults = [
  { title: '25', year: 0 },
  { title: '50', year: 1 },
  { title: '75', year: 2 },
  { title: '100', year: 3 },
]
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
    for (let i = 0; i < 20; i++) {
      result.push(<ResultCard key={i} item={data} />)
    }
    return result
  }

  return (
    <Main>
      <div className='retail-partner-container'>
        <div className='top'>
          <h1 className='title'>Find a Store</h1>
          <Row style={{ backgroundColor: '#f4f3f3', height: 70, alignItems: 'center', borderRadius: 10 }}>
            <Col xs={12} sm={12} lg={7}>
              <Row>
                <Col xs={12} sm={3} lg={3}>
                  <CssTextField
                    label="rhode island"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col xs={12} sm={3} lg={3}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={Distances}
                    getOptionLabel={(option) => option.title}
                    style={{ width: '100%' }}
                    renderInput={(params) => <CssTextField {...params}
                      label="Search radius"
                      variant="outlined" />}
                  />
                </Col>
                <Col xs={12} sm={3} lg={3}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={requiredresults}
                    getOptionLabel={(option) => option.title}
                    style={{ width: '100%' }}
                    renderInput={(params) => <CssTextField {...params}
                      label="Results"
                      variant="outlined" />}
                  />
                </Col>
                <Col xs={12} sm={3} lg={3}>
                  <Button variant="contained"
                    onClick={onSearchClick}
                    style={{ height: '100%', width: '100%' }}
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} lg={5}></Col>
          </Row>
        </div>
        <div className='body'>
          <Row style={{ width: '100%' }}>
            <Col xs={12} sm={4} lg={3} style={{ height: 380, overflow: 'auto' }}>
              <ScrollBar component="div">
                {renderResultList()}
              </ScrollBar>
            </Col>
            <Col xs={12} sm={8} lg={9} style={{ height: 380 }}>
              <MapContainer />
            </Col>
          </Row>
          {/* <div className='result-list'>
            {renderResultList()}
          </div>
          <div className='map'>
            <MapContainer />
          </div> */}
        </div>
      </div>
    </Main >
  )
}

export default Store