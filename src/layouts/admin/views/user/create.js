import React, { lazy } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
} from '@coreui/react'
import TheLayout from './../../containers/TheLayout'

const CreateUser = () => {

 
  return (
    <TheLayout>
      <CCard>
        <CCardHeader>
          Create User
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="first_name">Firts Name</CLabel>
                  <CInput id="first_name" placeholder="Enter your first name" required />
                </CFormGroup>
              </CCol>
            
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="last_name">Last Name</CLabel>
                  <CInput id="last_name" placeholder="Enter your last name" required />
                </CFormGroup>
              </CCol>

              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="nick_name">Nick Name</CLabel>
                  <CInput id="nick_name" placeholder="Enter your nick name" required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="user_name">User Name</CLabel>
                  <CInput id="user_name" placeholder="Enter your user name" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="email">Email</CLabel>
                  <CInput id="email" placeholder="Enter your email" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="password">Password</CLabel>
                  <CInput id="password" type='password' placeholder="Enter your password" required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="roles">Roles</CLabel>
                  <CSelect custom name="roles" id="roles">
                    <option value="">Select</option>
                    <option value="administrator">Administrator</option>
                    <option value="customer">Customer</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="display_name">Display Name</CLabel>
                  <CInput id="display_name" placeholder="Enter your display name" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="url">Url</CLabel>
                  <CInput id="url" placeholder="Enter your website url" required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="status">Status</CLabel>
                  <CSelect custom name="status" id="status">
                    <option value="">Select</option>
                    <option value="active">Active</option>
                    <option value="inactive">InActive</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="customer_no">Customer No</CLabel>
                  <CInput id="customer_no" placeholder="Enter your customer number" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="phone">Phone No</CLabel>
                  <CInput id="phone" placeholder="Enter your phone number" required />
                </CFormGroup>
              </CCol>
            </CRow>
            
            <CCardHeader>
              User Billing Address:
            </CCardHeader>
            <CRow>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="line_1">Address Line 1:</CLabel>
                  <CInput id="line_1" placeholder="Enter your address line 1" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="line_2">Address Line 2:</CLabel>
                  <CInput id="line_2" placeholder="Enter your adderss line 2" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="country">Country:</CLabel>
                  <CInput id="country" placeholder="Enter your country" required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="state">State</CLabel>
                  <CInput id="state" placeholder="Enter your state" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="city">City</CLabel>
                  <CInput id="city" placeholder="Enter your city" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="zip_code">Zip code</CLabel>
                  <CInput id="zip_code" placeholder="Enter your zip code" required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="longitude">Longitude</CLabel>
                  <CInput id="longitude" placeholder="Enter your longitude" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="latitude">Latitude</CLabel>
                  <CInput id="latitude" placeholder="Enter your latitude" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="billing_company">Billing Company</CLabel>
                  <CInput id="billing_company" placeholder="Enter your billing company" required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CCardHeader>
              User Shipping Address:
            </CCardHeader>
            <CRow>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="shipping_line_1">Address Line 1:</CLabel>
                  <CInput id="shipping_line_1" placeholder="Enter your address line 1" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="shipping_line_2">Address Line 2:</CLabel>
                  <CInput id="shipping_line_2" placeholder="Enter your adderss line 2" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="shipping_country">Country:</CLabel>
                  <CInput id="shipping_country" placeholder="Enter your country" required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="shipping_state">State</CLabel>
                  <CInput id="shipping_state" placeholder="Enter your state" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="shipping_city">City</CLabel>
                  <CInput id="shipping_city" placeholder="Enter your city" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="shipping_zip_code">Zip code</CLabel>
                  <CInput id="shipping_zip_code" placeholder="Enter your zip code" required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="shipping_longitude">Longitude</CLabel>
                  <CInput id="shipping_longitude" placeholder="Enter your longitude" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="shipping_latitude">Latitude</CLabel>
                  <CInput id="shipping_latitude" placeholder="Enter your latitude" required />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md='4'>
                <CFormGroup>
                  <CLabel htmlFor="shipping_company">Shipping Company</CLabel>
                  <CInput id="shipping_company" placeholder="Enter your shipping company" required />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={12} className='text-center'> 
              <CButton  color='primary'>Submit</CButton>
              </CCol>
            </CRow>
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default CreateUser
