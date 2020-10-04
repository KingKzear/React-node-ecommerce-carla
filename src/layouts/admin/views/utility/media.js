import React, { lazy, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CCollapse,
} from '@coreui/react'
import TheLayout from './../../containers/TheLayout'
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { Card, CardBody, Collapse, Col, Row } from 'reactstrap';
import Styles from './styles.module.css'
import FixedTextField from '../../../../components/FixedTextField';
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const medias = [
  { title: 'image', val: 0 },
  { title: 'audio', val: 1 },
  { title: 'video', val: 2 },
]
const dates = [
  { title: '2017', val: 0 },
  { title: '2018', val: 1 },
  { title: '2019', val: 2 },
]
const datas = [
  { title: '2017', val: 0 },
  { title: '2018', val: 1 },
  { title: '2019', val: 2 },
  { title: '2019', val: 2 },
  { title: '2019', val: 2 },
  { title: '2019', val: 2 },
  { title: '2019', val: 2 },
  { title: '2019', val: 2 },
  { title: '2019', val: 2 },
  { title: '2019', val: 2 },
]

const CssTextField = withStyles({
  root: {
    '& label': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '150%',
      alignItems: 'center',
      textAlign: 'center',

      color: ' #000',
      transform: 'translate(22px, 16px) scale(1)'
    },

    '& label.Mui-focused': {
      color: ' #000',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1px solid #fff',
        borderRadius: '19px'
      },
      '&:hover fieldset': {
        borderColor: ' #fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: ' #fff',
      },
    },
  },
})(FixedTextField);

const BoxPacking = () => {
  const [accordion, setAccordion] = useState(0)
  const [isbilling, setBilling] = React.useState(false);

  return (
    <TheLayout>
      <CCard>
        <CCardHeader>
          All Media
        </CCardHeader>
        <CCardBody>
          <div id="accordion">
            <Row>
              <Col xs={12} sm={12} lg={12}>
                <div className={Styles.selectDiv} onClick={() => { setBilling(!isbilling) }}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={medias}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300, paddingRight: 30 }}
                    renderInput={(params) => <CssTextField {...params} label="Select Media" variant="outlined" />}
                  />
                  <Autocomplete
                    id="combo-box-demo"
                    options={dates}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <CssTextField {...params} label="Select Dates" variant="outlined" />}
                  />
                </div>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody>
                      <Row style={{ width: '100%', justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
                        {
                          datas.map((val, index) => {
                            return (
                              <div style={{ width: 345, boxShadow: '2px -2px 16px 3px rgba(0,0,0,0.6)', margin: '1vh' }} key={index}>
                                <img src='../../assets/01-120-S-150x150-2.jpg' style={{ width: '100%' }} key={index + 1} />
                              </div>
                            )
                          })
                        }
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
          </div>
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default BoxPacking
