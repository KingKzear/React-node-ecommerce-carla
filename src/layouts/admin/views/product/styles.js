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

const fields = ['id', 'name','description', 'slug', 'count', 'action']

const StylesComponent = () => {


  return (
    <TheLayout>
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

export default StylesComponent
