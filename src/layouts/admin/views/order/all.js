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

const fields = ['order', 'date','status', 'ship to', 'total', 'export status', 'action', 'count', 'edit']

const AllOrders = () => {

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
            />
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default AllOrders
