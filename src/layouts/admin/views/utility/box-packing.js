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
import TheLayout from './../../containers/TheLayout'
import 'react-dual-listbox/lib/react-dual-listbox.css';

const BoxPacking = () => {
  const [accordion, setAccordion] = useState(0)
  
  return (
    <TheLayout>
      <CCard>
          <CCardHeader>
            Box Packing
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
                    <h5 className="m-0 p-0">Box Packing Details</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                    <CRow>
                     <CButton>Add Files</CButton>
                    </CRow>
                    <CRow className='mt-4 mb-4'>
                      <CCol md={6} xs={12}>
                        <CInput id="city" placeholder="Enter city" required />
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CInput id="state" placeholder="Enter state" required/>
                      </CCol>
                    </CRow>
                    <CRow className='mt-4 mb-4'>
                      <CCol md={6} xs={12}>
                        <CInput id="city" placeholder="Enter city" required />
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CInput id="state" placeholder="Enter state" required/>
                      </CCol>
                    </CRow>
                    <CRow className='mt-4 mb-4'>
                      <CCol md={6} xs={12}>
                        <CInput id="city" placeholder="Enter city" required />
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CInput id="state" placeholder="Enter state" required/>
                      </CCol>
                    </CRow>
                    <CRow className='mt-4 mb-4'>
                      <CCol md={6} xs={12}>
                        <CInput id="city" placeholder="Enter city" required />
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CInput id="state" placeholder="Enter state" required/>
                      </CCol>
                    </CRow>
                    <CRow className='mt-4 mb-4'>
                      <CCol md={6} xs={12}>
                        <CInput id="city" placeholder="Enter city" required />
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CInput id="state" placeholder="Enter state" required/>
                      </CCol>
                    </CRow>
                    <CRow className='mt-4 mb-4'>
                      <CCol md={6} xs={12}>
                        <CInput id="city" placeholder="Enter city" required />
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CInput id="state" placeholder="Enter state" required/>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              
            </div>
          </CCardBody>

          <CRow>
            <CCol xs={12}>
              <CButton color='primary' className='m-4'>Save</CButton>
            </CCol>
          </CRow>
        </CCard>
    </TheLayout>
  )
}

export default BoxPacking
