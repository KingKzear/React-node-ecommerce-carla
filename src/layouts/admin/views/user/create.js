import React, { lazy, useState } from 'react'
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
  CForm,
} from '@coreui/react'
import TheLayout from './../../containers/TheLayout'
import UserService from './../../../../service/user.service'
import useForm from './../../../../util/useForm'

const CreateUser = () => {
  const [values, setValues] = useState({})
  const [shippingAddress, setShippingAddress] = useState({})
  const [billingAddress, setBillingAddress] = useState({})
  const [isSameAddress, setIsSameAddress] = useState(false)
  
  const handleSubmit = (evt) => {
  // const onClick = (evt) => {
    evt.preventDefault()
    console.log(values)
    console.log(shippingAddress)
    console.log(billingAddress)
    let billingAddressId, shippingAddressId
    if(Object.keys(billingAddress).length > 0) {
      UserService.saveAddress(billingAddress)
      .then(res=>{
        billingAddressId = res.data._id
        if(!isSameAddress && Object.keys(shippingAddress).length > 0) {
          UserService.saveAddress(shippingAddress)
          .then(ship=>{
            shippingAddressId = ship.data._id
            saveUserInfo({...values, billing_ddress: billingAddressId, shipping_address: shippingAddressId})
          })
        } else if(isSameAddress) {
          shippingAddressId = billingAddressId
          saveUserInfo({...values, billing_ddress: billingAddressId, shipping_address: shippingAddressId})
        }
      })
    }
  }

  const saveUserInfo = (data) => {
    let param = {...data, roles: [data.roles]}
    UserService.saveUserInfo(param)
    .then(res=>{
      console.log(res)
    })
  }

  const onUseSameAddress = () => {
    setIsSameAddress(!isSameAddress)
  }

  const handleChange = (type, event) => {
    console.log(type, event)
    event.persist();
    if ( type === 'billing') {
      setBillingAddress(billingAddress => ({ ...billingAddress, [event.target.name]: event.target.value }));  
    } else if ( type === 'shipping' ) {
      setShippingAddress(shippingAddress => ({ ...shippingAddress, [event.target.name]: event.target.value }));  
    } else {
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }
  };

  return (
    <TheLayout>
      <CCard>
        <CCardHeader>
          Create User
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CForm onSubmit={handleSubmit}>
          {/* <CForm> */}
            <CRow>
              <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="first_name">Firts Name</CLabel>
                    <CInput id="first_name" name="first_name" placeholder="Enter your first name" onChange={(e)=>handleChange('info', e)} />
                  </CFormGroup>
                </CCol>
              
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="last_name">Last Name</CLabel>
                    <CInput id="last_name" name="last_name" placeholder="Enter your last name" onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>

                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="nick_name">Nick Name</CLabel>
                    <CInput id="nick_name" name='nick_name' placeholder="Enter your nick name" onChange={(e)=>handleChange('info', e)} />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="username">User Name</CLabel>
                    <small> <code>*</code></small>
                    <CInput id="username" name='username' placeholder="Enter your user name" required onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="email">Email</CLabel>
                    <small> <code>*</code></small>
                    <CInput id="email" name='email' placeholder="Enter your email" required onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="password">Password</CLabel>
                    <small> <code>*</code></small>
                    <CInput id="password" name='password' type='password' placeholder="Enter your password" required onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="roles">Roles</CLabel>
                    <CSelect custom name="roles" id="roles" onChange={(e)=>handleChange('info', e)}>
                      <option value="administrator">Administrator</option>
                      <option value="customer">Customer</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="display_name">Display Name</CLabel>
                    <CInput id="display_name" name='display_name' placeholder="Enter your display name" onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="url">Url</CLabel>
                    <CInput id="url" name='user_url' placeholder="Enter your website url" onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="status">Status</CLabel>
                    <CSelect custom name="status" id="status" onChange={(e)=>handleChange('info', e)}>
                      <option value="Active">Active</option>
                      <option value="Inactive">InActive</option>
                      <option value="Pending">Pending</option>
                      <option value="Banned">Banned</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="customer_no">Customer No</CLabel>
                    <small> <code>*</code></small>
                    <CInput id="customer_no" name='customer_number' placeholder="Enter your customer number" required onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="phone">Phone No</CLabel>
                    <small> <code>*</code></small>
                    <CInput id="phone" name='phone' placeholder="Enter your phone number" required onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              
              <CCardHeader>
                User Billing Address:
              </CCardHeader>
              <CRow>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="street1">Address Line 1:</CLabel>
                    <CInput  name="street1" placeholder="Enter your address line 1" onChange={(e)=>handleChange('billing', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="street2">Address Line 2:</CLabel>
                    <CInput name="street2" placeholder="Enter your adderss line 2"  onChange={(e)=>handleChange('billing', e)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="country">Country:</CLabel>
                    <CInput name="country" placeholder="Enter your country"  onChange={(e)=>handleChange('billing', e)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="state">State</CLabel>
                    <CInput name="state" placeholder="Enter your state"  onChange={(e)=>handleChange('billing', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput name="city" placeholder="Enter your city"  onChange={(e)=>handleChange('billing', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="zip_code">Zip code</CLabel>
                    <CInput  name="zip_code" placeholder="Enter your zip code"  onChange={(e)=>handleChange('billing', e)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="longitude">Longitude</CLabel>
                    <CInput name="longitude" placeholder="Enter your longitude"  onChange={(e)=>handleChange('billing', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="latitude">Latitude</CLabel>
                    <CInput  name="latitude" placeholder="Enter your latitude"  onChange={(e)=>handleChange('billing', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="billing_company">Billing Company</CLabel>
                    <CInput id="billing_company" name="billing_company" placeholder="Enter your billing company"  onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CCardHeader>
                User Shipping Address:
              </CCardHeader>
              
              <CRow>
                <CButton className='text-left' block shape="square" color="link" onClick={onUseSameAddress}>{`Click here if ${!isSameAddress ? 'Same As' : 'Different from'} Billing Address`}</CButton>
              </CRow>
              {!isSameAddress &&
              <>
              <CRow>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="street1">Address Line 1:</CLabel>
                    <CInput  name="street1" placeholder="Enter your address line 1"  onChange={(e)=>handleChange('shipping', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="street2">Address Line 2:</CLabel>
                    <CInput name="street2" placeholder="Enter your adderss line 2"  onChange={(e)=>handleChange('shipping', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="country">Country:</CLabel>
                    <CInput name="country" placeholder="Enter your country"  onChange={(e)=>handleChange('shipping', e)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="state">State</CLabel>
                    <CInput name="state" placeholder="Enter your state"  onChange={(e)=>handleChange('shipping', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput name="city" placeholder="Enter your city"  onChange={(e)=>handleChange('shipping', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="zip_code">Zip code</CLabel>
                    <CInput name="zip_code" placeholder="Enter your zip code"  onChange={(e)=>handleChange('shipping', e)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="longitude">Longitude</CLabel>
                    <CInput name="longitude" placeholder="Enter your longitude"  onChange={(e)=>handleChange('shipping', e)} />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="latitude">Latitude</CLabel>
                    <CInput  name="latitude" placeholder="Enter your latitude"  onChange={(e)=>handleChange('shipping', e)}/>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md='4'>
                  <CFormGroup>
                    <CLabel htmlFor="shipping_company">Shipping Company</CLabel>
                    <CInput id="shipping_company" name="shipping_company" placeholder="Enter your shipping company"  onChange={(e)=>handleChange('info', e)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              </>
              }
              <CRow>
                <CCol xs={12} className='text-center'> 
                <CButton type='submit' color='primary'>Submit</CButton>
                </CCol>
              </CRow>
            </CForm>          
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default CreateUser
