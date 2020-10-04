import React, { useState } from 'react'
import {connect} from 'react-redux'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import AdminWrapper from '../wrapper'
import { SignupValidator } from '../../../../util/validator'
import useForm from './../../../../util/useForm'
import AuthService from './../../../../service/auth.service'
import history from './../../../../history'
import { loginSuccess } from './../../../../actions/auth'
import './index.scss'

const AdminRegister = (props) => {
  const { loginSuccess } = props
  const [formValues, setFormValues] = useState({successful: false})
  
  const handleRegister = () => {
    console.log(values)
    AuthService.register(values.username, values.email, values.password)
    .then(response=>{
      loginSuccess(response.data)
      history.push('/admin/dashboard')
    }) 
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(handleRegister, SignupValidator);


  return (
    <AdminWrapper>
      <div className="c-app c-default-layout flex-row align-items-center admin-register-form">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="6">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm onSubmit={handleSubmit} noValidate>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <CInputGroup className={`${errors.username ? 'bottom-0' : 'mb-3'}`}>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name='username' placeholder="Username" autoComplete="username" value={formValues['username']} onChange={handleChange}/>
                    </CInputGroup>
                    {errors.username && (
                        <p className="help is-danger">{errors.username}</p>
                      )}
                    <CInputGroup className={`${errors.email ? 'bottom-0' : 'mb-3'}`}>
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name='email' placeholder="Email" autoComplete="email"  value={formValues['email']} onChange={handleChange}/>
                    </CInputGroup>
                    {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                      )}
                    <CInputGroup className={`${errors.password ? 'bottom-0' : 'mb-3'}`}>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name='password' placeholder="Password" autoComplete="new-password"  value={formValues['password']} onChange={handleChange}/>
                    </CInputGroup>
                    {errors.password && (
                        <p className="help is-danger">{errors.password}</p>
                      )}
                    <CInputGroup className={`${errors.repeat_password ? 'bottom-0' : 'mb-4'}`}>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name='repeat_password' placeholder="Repeat password" autoComplete="new-password"  value={formValues['repeat_password']} onChange={handleChange}/>
                    </CInputGroup>
                    {errors.repeat_password && (
                        <p className="help is-danger">{errors.repeat_password}</p>
                      )}
                    <CButton type='submit' color="success" block>Create Account</CButton>
                  </CForm >
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </AdminWrapper>
  )
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
      loginSuccess: (user) => {
          dispatch(loginSuccess(user))
      },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRegister)

