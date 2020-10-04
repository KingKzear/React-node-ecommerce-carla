import React, { useState } from 'react';
import Main from './../../components/container'
import CustomLabel from '../../components/elements/custom-label';
import './index.scss'


function LoginPage() {
  
  const [loginData, setLoginData] = useState({email: '', password: '', isRemeber: false})
  const [registerData, setRegisterData] = useState({number: '', email: '', password: '', confirm: ''})

  const onTextChange = (category, type, evt) => {
    console.log(category, type, evt)
  
  }
  
  const onLoginRememberChange = (evt) => {

  }
  
  return(
    <Main>
      <div className='authentication-container'>
        <div className='title'>My Account</div>
        <div className='form'>
          <div className='login'>
            <div className='title'>Login</div>
            <div className='input-groups'>
              <div className='input-item'>
                <CustomLabel position='top'>Username or email address *</CustomLabel>
                <input type='text' value={loginData.email} onChange={(e) => onTextChange('login', 'email')} />
              </div>
              <div className='input-item mt-2'>
                <CustomLabel position='top'>Password *</CustomLabel>
                <input type='password' value={loginData.password} onChange={(e) => onTextChange('login', 'password')} />
              </div>
              <div className='input-item mt-2'>
                <button className='authentication-button' type='submit'>Login</button>
                <input type='checkbox' value={loginData.isRemeber} onChange={onLoginRememberChange} /><CustomLabel position='right'>Remember me</CustomLabel>
                <p>Lost your password ?</p>
              </div>
            </div>
          </div>

          <div className='register'>
            <div className='title'>Register</div>
            <div className='input-groups'>
              <div className='input-item'>
                <CustomLabel position='top'>Customer Number *</CustomLabel>
                <input type='text' value={registerData.number} onChange={(e) => onTextChange('register', 'number')} />
              </div>
              <div className='input-item mt-2'>
                <CustomLabel position='top'>Username or email address *</CustomLabel>
                <input type='text' value={registerData.email} onChange={(e) => onTextChange('register', 'email')} />
              </div>
              <div className='input-item mt-2'>
                <CustomLabel position='top'>Password *</CustomLabel>
                <input type='password' value={registerData.password} onChange={(e) => onTextChange('register', 'password')} />
              </div>
              <div className='input-item mt-2'>
                <CustomLabel position='top'>Confirm Password *</CustomLabel>
                <input type='password' value={registerData.confirm} onChange={(e) => onTextChange('register', 'confirm')} />
              </div>
              <div className='input-item mt-2'>
                <button className='authentication-button' type='submit'>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default LoginPage