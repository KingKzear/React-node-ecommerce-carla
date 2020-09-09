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

const fields = ['store name', 'address','city', 'state', 'zip code', 'country', 'action']

const AllStores = () => {

  return (
    <TheLayout>
      <CCard>
        <CCardHeader>
          All Stores
        </CCardHeader>
        <CCardBody>
          <CDataTable
              items={[]}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'action': (item)=>(
                  <td><CButton color='danger'><CIcon name='cil-trash'/></CButton></td>
                )               
              }}
            />
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default AllStores
