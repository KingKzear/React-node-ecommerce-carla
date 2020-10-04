import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import history from './../../../../history'
import AdminWrapper from '../wrapper'
import { LoginValidator } from '../../../../util/validator'
import useForm from './../../../../util/useForm'
import AuthService from './../../../../service/auth.service'
import { loginSuccess } from './../../../../actions/auth'
import './index.scss';
import Snack from '../../../../components/snackbar';

const Login = (props) => {
  const { loginSuccess } = props
  const [type, setType] = React.useState("");
  const [SMScontent, setSMScontent] = React.useState("");

  const onLogin = () => {
    AuthService.login(values.username, values.password)
      .then(response => {
        if (response.data.accessToken) {
          console.log(response.data)
          loginSuccess({ ...response.data })
          history.push('/admin/dashboard')
        }

        return response.data;
      })
      .catch(error => {
        setSMScontent(error.response.data.message);
        setType("error");
        document.getElementById('btn_snack').click();
      })
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(onLogin, LoginValidator);


  return (
    <AdminWrapper>
      <Snack type={type} content={SMScontent} />
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className={`${errors.username ? 'bottom-0' : 'mb-3'}`}>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" name='username' placeholder="Username" autoComplete="username" onChange={handleChange} />
                      </CInputGroup>
                      {errors.username && (
                        <p className="help is-danger">{errors.username}</p>
                      )}
                      <CInputGroup className={`${errors.username ? 'bottom-0' : 'mb-4'}`}>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" name='password' placeholder="Password" autoComplete="current-password" onChange={handleChange} />
                      </CInputGroup>
                      {errors.password && (
                        <p className="help is-danger">{errors.password}</p>
                      )}
                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary" className="px-4" type='submit'>Login</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/admin/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
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
)(Login)
