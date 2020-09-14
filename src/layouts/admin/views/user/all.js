import React, { useEffect, useState } from 'react'
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
import UserService from './../../../../service/user.service'

const fields = ['display_name', 'username', 'email', 'phone','address', 'roles', 'status', 'action']

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
  const [users, setUsers] = useState([])

  useEffect(()=>{
    UserService.getAllUsers()
    .then(res=> {
      if(res && res.data) {
        setUsers(res.data)
      }
    })
  }, [])

  const onClickEdit = (user) => {
    console.log(user.id)
  }

  const onClickDelete = (user) => {
    console.log(user.id)
  }

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
              items={users}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'address':(item)=>(
                  <td>
                    {item.v ? item.address : ''}
                  </td>
                ),
                'phone':(item)=>(
                  <td>
                    {item.phone ? item.phone : ''}
                  </td>
                ),
                'roles':(item)=>(
                  <td>
                    {item.roles.map(el=>el.name).join(', ')}
                  </td>
                ),
                'status':
                (item)=>(
                  <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                'action': (item)=>(
                  <td>
                    <CButton color='warning' style={{marginRight: 4}} onClick={()=>onClickEdit(item)}><CIcon name='cil-pencil'/></CButton>
                    <CButton color='danger' onClick={()=>onClickDelete(item)}><CIcon name='cil-trash'/></CButton>
                  </td>
                )               
              }}
            />
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default AllUsers