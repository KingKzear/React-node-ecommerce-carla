import React, {useState} from 'react';
import Main from './../../components/container'
import CustomLabel from '../../components/elements/custom-label';
import './index.scss'

function Register() {
  const [registerData, setRegisterData] = useState({number: '', email: '', password: '', confirm: ''})

  const onTextChange = (category, type, evt) => {
    console.log(category, type, evt)
  
  }

  return(
    <Main>
      <div className='authentication-container'>
        <div className='warning'>
          A CarlaCorp Customer Number (available only to retailers) is required to join.Please contact us to get a customer number.
        </div>
        <div className='form'>
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

export default Register