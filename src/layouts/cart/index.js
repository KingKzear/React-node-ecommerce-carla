import React, { useState } from 'react';
import Main from './../../components/container'
import CustomLabel from '../../components/elements/custom-label';
import './index.scss'


function Cart() {
  
  return(
    <Main>
      <div className='cart-container'>
        <div className='title'>
          
        </div>
        <div className='form'>
          <div className='empty'>Your cart is currently empty.</div>
          <div className='empty'>Your cart is currently empty.</div>
          <div className='return-to-shop'>
            <a href='/search-result'>Return to Shop</a>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Cart