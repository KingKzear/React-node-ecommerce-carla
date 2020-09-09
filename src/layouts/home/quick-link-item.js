import React from 'react';
import { Nav } from 'react-bootstrap'

function QuickLinkItem(props) {
  const { item } = props

  return(
    <div className='quick-link-item'>
      <Nav.Link href={item.href}>
        <div><span className='list-style'>0</span>{item.title}</div>
      </Nav.Link>
    </div>
  )
}

export default QuickLinkItem