import React from 'react';
import { MENU } from './../../const/constant'
import { Nav } from 'react-bootstrap'
import MenuItem from './menuItem'
import './index.scss'
import SearchInput from './search'

function Menu() {
  
  const renderMenuItems = () => {
    let result = []
    MENU.forEach((el, index) => {
      result.push(
        <MenuItem key={index} title={el.title} subMenu={el.children} href={el.href}/>
      )
    });
    return result;
  }

  return(
    <div className='menu-container'>
      <div className='nav-item-container'>
        <Nav className="justify-content-center">
        {renderMenuItems()}
        </Nav>
        <SearchInput />
      </div>
    </div>
  )
}

export default Menu