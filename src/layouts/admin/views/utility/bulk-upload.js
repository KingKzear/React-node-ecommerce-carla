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
import { Container, Card, CardBody, Collapse, Col, Row } from 'reactstrap';
import Styles from './styles.module.css'
import Button from '@material-ui/core/Button';

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
            <Row>
              <Col xs={12} sm={12} lg={12}>
                <Collapse isOpen={true}>
                  <Card>
                    <CardBody>
                      <Row style={{ width: '100%', marginBottom: 20 }}>
                        <Col xs={12} sm={4} lg={3}>
                          <div className={Styles.allusers}>Upload CSV</div>
                          <dov>
                            <input type='file' />
                          </dov>
                        </Col>
                        <Col xs={12} sm={8} lg={9} style={{ textAlign: 'center' }}>
                          <div className={Styles.txtcss}>Sample CSV Format</div>
                          <div style={{ width: '100%' }}>
                            <img src="../../assets/csv.png" style={{ width: '100%' }} />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} style={{ marginBottom: '1vh' }}>
                          <Button variant="contained" color="primary" style={{ backgroundColor: '#db4b31' }}>
                            SAVE
                          </Button>
                        </Col>
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
