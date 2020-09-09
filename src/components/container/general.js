import React from 'react';
import Header from './../header'
import Menu from './../menu'

function GeneralView(props) {
  const { children } = props

  return(
    <>
      <Header>
        <Menu />
        <div>{children}</div>
      </Header>
    </>
  )
}

export default GeneralView