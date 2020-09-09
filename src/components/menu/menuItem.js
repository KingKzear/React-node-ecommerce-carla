import React from 'react';
import { Nav } from 'react-bootstrap'
import history from './../../history'

function MenuItem(props) {
  const { title, subMenu, href } = props

  const onClick = (href) => {
    console.log(history)
    console.log(href)
    history.push(href)
  }

  const renderChildren = () => {
    let result = []

    subMenu.forEach((el, index) => {
      result.push(
        <Nav.Link key={index} className='menu-item' onClick={()=>onClick(el.href)}>
          {el.title}
        </Nav.Link>
      )
    });
    return result;
  }

  return(
    <Nav.Item>
      <Nav.Link className='menu-item' href={href}>
        {title}
        <div className='sub-menu-item'>
          {renderChildren()}
        </div>
      </Nav.Link>
    </Nav.Item>
  )
}

export default MenuItem