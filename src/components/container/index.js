import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router'
import GeneralView from './general' 


function Main(props) {
  const { children, path } = props
  const[locationPath, setLocationPath] = useState('/')

  useEffect(()=>{
    console.log('path changed', path)
    setLocationPath(path)
  }, [path])

  const renderGeneralView = () => {
    return <GeneralView>{children}</GeneralView>
  }

  return(
    <div>
      {renderGeneralView()}
    </div>
  )
}

export default withRouter(Main)