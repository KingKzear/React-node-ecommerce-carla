import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import './index.scss'
import { withStyles } from '@material-ui/core/styles';
import FixedTextField from '../../components/FixedTextField'
import Styles from './style.module.css'
import Button from '@material-ui/core/Button';

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

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#999',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

function PriceRange(props) {
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(2000)

  const onChange = (type, evt) => {
    if (type == 'from') {
      setFrom(evt.target.value)
    } else if (type == 'to') {
      setTo(evt.target.value)
    }
  }

  const onSliderChange = (evt, newValue) => {
    setFrom(newValue[0])
    setTo(newValue[1])
  }

  const resetFilter = () => {
    setFrom(0);
    setTo(2000);
  }

  return (
    <div className='price-range'>
      <div className={Styles.pricevalue}>
        <CssTextField
          label="$"
          variant="outlined"
          id="custom-css-outlined-input"
          style={{ width: '48%', color: '#333', fontWeight: 'bold' }}
          onChange={(evt) => onChange('from', evt)}
          value={from}
        />
        <div className='splitter'>-</div>
        <CssTextField
          label="$"
          variant="outlined"
          id="custom-css-outlined-input"
          style={{ width: '48%', color: '#333', fontWeight: 'bold' }}
          onChange={(evt) => onChange('to', evt)}
          value={to}
        />
      </div>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        value={[from, to]}
        onChange={onSliderChange}
        valueLabelDisplay="auto"
        max={2000}
      />
      <div className={Styles.filteritem} style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={resetFilter}
        >
          Reset Filter
        </Button>
      </div>
    </div>
  )
}

export default PriceRange