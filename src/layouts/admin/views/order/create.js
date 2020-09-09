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
  CCollapse,
  CDataTable
} from '@coreui/react'
import DualListBox from 'react-dual-listbox';
import TheLayout from './../../containers/TheLayout'
import 'react-dual-listbox/lib/react-dual-listbox.css';

const fields = ['image', 'name','style id', 'cost', 'quantity', 'total']

const CreateOrder = () => {
  const [accordion, setAccordion] = useState(0)
  
  return (
    <TheLayout>
      <CCard>
          <CCardHeader>
            Create Order
          </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0 no-box-shadow" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">General Information</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="status">Status</CLabel>
                          <CSelect>
                            <option value='pending'>Payment Pending</option>                            
                            <option value='processing'>Processing</option>                            
                            <option value='hold'>On Hold</option>                            
                            <option value='completed'>Completed</option>                            
                            <option value='cancelled'>Cancelled</option>                            
                            <option value='refunded'>Refunded</option>                            
                            <option value='failed'>Failed</option>                            
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                        <CLabel htmlFor="customer">Customer</CLabel>
                          <CSelect>
                            <option value='guest'>Guest</option>                            
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="date">Select Date</CLabel>
                          <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0 no-box-shadow" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Billing Address</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="first_name">First Name</CLabel>
                          <CInput id="first_name" placeholder="Enter first name" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="last_name">Last Name</CLabel>
                          <CInput id="last_name" placeholder="Enter last name" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="company">Company</CLabel>
                          <CInput id="company" placeholder="Enter company" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="address_1">Address 1</CLabel>
                          <CInput id="address_1" placeholder="Enter address 1" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="address_2">Address 2</CLabel>
                          <CInput id="address_2" placeholder="Enter Address 2" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="city">City</CLabel>
                          <CInput id="city" placeholder="Enter city" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="zip_code">Zip Code</CLabel>
                          <CInput id="zip_code" placeholder="Enter zip code" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="country">Country</CLabel>
                          <CInput id="country" placeholder="Enter country" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="state">State</CLabel>
                          <CInput id="state" placeholder="Enter state" required/>
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="email">Email</CLabel>
                          <CInput id="email" placeholder="Enter email" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="phone">Phone</CLabel>
                          <CInput id="phone" placeholder="Enter phone" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="tx_id">Transaction id</CLabel>
                          <CInput id="tx_id" placeholder="Enter transaction id" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0 no-box-shadow" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Shipping Address</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="first_name">First Name</CLabel>
                          <CInput id="first_name" placeholder="Enter first name" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="last_name">Last Name</CLabel>
                          <CInput id="last_name" placeholder="Enter last name" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="company">Company</CLabel>
                          <CInput id="company" placeholder="Enter company" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="address_1">Address 1</CLabel>
                          <CInput id="address_1" placeholder="Enter address 1" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="address_2">Address 2</CLabel>
                          <CInput id="address_2" placeholder="Enter Address 2" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="city">City</CLabel>
                          <CInput id="city" placeholder="Enter city" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="zip_code">Zip Code</CLabel>
                          <CInput id="zip_code" placeholder="Enter zip code" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="country">Country</CLabel>
                          <CInput id="country" placeholder="Enter country" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="state">State</CLabel>
                          <CInput id="state" placeholder="Enter state" required/>
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="customer_note">Customer Notes</CLabel>
                          <CInput id="customer_note" placeholder="Enter customer notes" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0 no-box-shadow" 
                    onClick={() => setAccordion(accordion === 3 ? null : 3)}
                  >
                    <h5 className="m-0 p-0">Add Item</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 3}>
                  <CCardBody>
                    <CDataTable
                      items={[]}
                      fields={fields}
                      itemsPerPage={5}
                      pagination
                    />
                  </CCardBody>
                </CCollapse>
              </CCard>
             </div>
          </CCardBody>

          <CRow>
            <CCol xs={12} className='text-center'>
              <CButton color='primary' className='m-4'>Submit</CButton>
            </CCol>
          </CRow>
        </CCard>
    </TheLayout>
  )
}

export default CreateOrder
