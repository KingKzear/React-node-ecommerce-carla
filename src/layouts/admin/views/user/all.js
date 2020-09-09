import React, { lazy } from 'react'
import {
  CBadge,
  CDataTable,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CForm,
  CInput,
  CRow,
  CCol
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import TheLayout from './../../containers/TheLayout'

import usersData from '../users/UsersData'
const fields = ['name','registered', 'role', 'status', 'action']

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const AllUsers = () => {
  return (
    <TheLayout>
      <CCard>
        <CForm inline>
          <CRow className='p-2'>
            <CCol xs='12' className='pl-4'>
              <CInput
                  className="mr-sm-2"
                  placeholder="Search"
                  size="sm"
                />
              <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCard>
      <CCard>
        <CCardHeader>
          All Users
        </CCardHeader>
        <CCardBody>
          <CDataTable
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                (item)=>(
                  <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
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

export default AllUsers