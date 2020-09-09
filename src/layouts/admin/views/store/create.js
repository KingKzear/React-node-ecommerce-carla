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
  CForm,
  CTextarea
} from '@coreui/react'
import DualListBox from 'react-dual-listbox';
import TheLayout from './../../containers/TheLayout'
import 'react-dual-listbox/lib/react-dual-listbox.css';

const CreateStore = () => {
  const [collapse, setCollapse] = useState(false)
  const [accordion, setAccordion] = useState(0)
  const [fade, setFade] = useState(true)
  const [selectedData, setSelectedData] = useState({})

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
                    <h5 className="m-0 p-0">Location</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="address_1">Address 1</CLabel>
                          <CInput id="address_1" placeholder="Enter address 1" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="address_2">Address 2</CLabel>
                          <CInput id="address_2" placeholder="Enter Address 2" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="city">City</CLabel>
                          <CInput id="city" placeholder="Enter city" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="state">State</CLabel>
                          <CInput id="state" placeholder="Enter state" required/>
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
                          <CLabel htmlFor="latitude">Latitude</CLabel>
                          <CInput id="latitude" placeholder="Enter latitude" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="longitude">Longitude</CLabel>
                          <CInput id="longitude" placeholder="Enter longitude" required/>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="store_name">Store Name</CLabel>
                          <CInput id="store_name" placeholder="Enter store name" required />
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
                    <h5 className="m-0 p-0">Opening Hours</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="opening_hours">Opening Hours</CLabel>
                          <CInput id="opening_hours" placeholder="Enter opening hours" required />
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
                    <h5 className="m-0 p-0">Additional Information</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="tel">Tel</CLabel>
                          <CInput id="tel" placeholder="Enter tel" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="fax">Fax</CLabel>
                          <CInput id="fax" placeholder="Enter fax" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="email">Email</CLabel>
                          <CInput id="email" placeholder="Enter email" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="url">Url</CLabel>
                          <CInput id="url" placeholder="Enter url" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
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

export default CreateStore
