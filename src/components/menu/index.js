import React from 'react';
import { MENU } from './../../const/constant'
import { Nav } from 'react-bootstrap'
import MenuItem from './menuItem'
import './index.scss'
import SearchInput from './search'
import FixedTextField from '../FixedTextField'
import {
  withStyles
} from '@material-ui/core/styles';
import {
  Container,
  Row,
  Col,
  Carousel,
  Button
} from 'react-bootstrap'

const CssTextField = withStyles({
  root: {
    '& label': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      // fontSize: '150%',
      alignItems: 'center',
      textAlign: 'center',

      color: ' #fff',
      transform: 'translate(22px, 16px) scale(1)'
    },

    '& label.Mui-focused': {
      color: ' #fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1px solid #fff',
        borderRadius: '10px'
      },
      '&:hover fieldset': {
        borderColor: ' #fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: ' #fff',
      },
    },
  },
})(FixedTextField);
function Menu() {

  const renderMenuItems = () => {
    let result = []
    MENU.forEach((el, index) => {
      result.push(
        <MenuItem key={index} title={el.title} subMenu={el.children} href={el.href} />
      )
    });
    return result;
  }

  return (
    <Row className='menu-container'>
      <Col xs={12} sm={8} lg={9} className='nav-item-container'>
        <Nav className="justify-content-center">
          {renderMenuItems()}
        </Nav>
      </Col>
      <Col xs={12} sm={3} lg={2}>
        <CssTextField
          label="Search"
          variant="outlined"
          id="custom-css-outlined-input"
          style={{ width: '100%', color: '#fff', fontWeight: 'bold' }}
        />
      </Col>
      <Col xs={12} sm={1} lg={1}></Col>
    </Row>
  )
}

export default Menu