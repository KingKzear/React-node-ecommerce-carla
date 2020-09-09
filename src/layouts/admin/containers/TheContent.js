import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
import history from './../../../history'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = (props) => {
  const { children } = props
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          {children}
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
