import React, { lazy, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CSelect,
  CDataTable,
  CForm,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import TheLayout from './../../containers/TheLayout'
import 'react-dual-listbox/lib/react-dual-listbox.css';

const fields = ['check', 'image','product price', 'stock', 'name', 'styled id', 'collection', 'category', 'stoneclass', 'styletype', 'action']

const AllProducts = () => {
  const onSortByChange = (evt) => {

  }

  return (
    <TheLayout>
      <CCard>
        <CForm inline>
          <CRow className='p-2'>
            <CCol xs='4' className='pl-4'>
              <CInput
                  className="mr-sm-2"
                  placeholder="Search"
                  size="sm"
                />
              <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
            </CCol>
            <CCol xs='4' className='pl-4'>
              <CSelect onChange={onSortByChange}>
                <option value=''>Sort By</option>
                <option value='date'>Date</option>
                <option value='price'>Price</option>
              </CSelect>
            </CCol>
          </CRow>
        </CForm>
      </CCard>
      <CCard>
        <CCardHeader>
          All Products
        </CCardHeader>
        <CCardBody>
          <CDataTable
              items={[]}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'check':
                (item)=>(
                  <td><CInput type='checkbox'/></td>
                  ),
                'action': (item)=>(
                  <td><CButton color='warning' style={{marginRight: 4}}><CIcon name='cil-pencil'/></CButton><CButton color='danger'><CIcon name='cil-trash'/></CButton></td>
                )               
              }}
            />
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default AllProducts
