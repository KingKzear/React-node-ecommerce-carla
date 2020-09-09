import React from 'react';
import { Container } from 'react-bootstrap'
import SocialNavigator from './social'
import AccountNavigator from './account'
import Banner from './banner'
import FooterMenus from './account/footer-menu'
import './index.scss'

function Header(props) {
  const { children } = props

  return(
    <div className='floating-header'>
      <div className='header-container top'>
        <div className='utility-bar'>
          <Container className='top-nav'>
            <SocialNavigator />
            <AccountNavigator />
          </Container>
        </div>
        <Banner />
      </div>
      {children}
      <div className='header-container bottom'>
        <div className='utility-bar'>
          <Container className='top-nav'>
            <SocialNavigator />
            <FooterMenus />            
          </Container>
        </div>
      </div>
    </div>
    )
}

export default Header