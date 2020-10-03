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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FixedTextField from '../../../../components/FixedTextField';
import Slide from '@material-ui/core/Slide';
import { withStyles, makeStyles } from '@material-ui/core/styles';

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
        border: '1px solid #20a8d8',
        borderRadius: '19px'
      },
      '&:hover fieldset': {
        borderColor: ' #20a8d8',
      },
      '&.Mui-focused fieldset': {
        borderColor: ' #20a8d8',
      },
    },
  },
})(FixedTextField);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BoxPacking = () => {
  const [accordion, setAccordion] = useState(0)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TheLayout>
      <div style={{ width: 500 }}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ display: 'none' }} id="btn-add">
          Slide in alert dialog
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title" style={{ backgroundColor: '#db4b31', color: '#fff' }}>{""}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div>
                <div>
                  <CssTextField
                    placeholder="Enter Box name"
                    style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                  />
                </div>
                <div>
                  <CssTextField
                    placeholder="Enter Box name"
                    style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                  />
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" style={{ backgroundColor: '#db4b31', marginBottom: 20, color: '#fff' }}>
              CLOSE
            </Button>
            <Button onClick={handleClose} color="primary" style={{ backgroundColor: '#db4b31', marginBottom: 20, color: '#fff' }}>
              SAVE CHANGES
            </Button>
          </DialogActions>
        </Dialog>
      </div>
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
                    <CButton color="primary" style={{ backgroundColor: '#db4b31' }}
                      onClick={() => { document.getElementById('btn-add').click(); }}
                    >
                      ADD FEILDS
                    </CButton>
                  </CRow>
                  <CRow className='mt-4 mb-4'>
                    <CCol md={6} xs={12}>
                      <CInput id="city" placeholder="Enter Box name" required />
                    </CCol>
                    <CCol md={6} xs={12}>
                      <CInput id="state" placeholder="Enter Box price" required />
                    </CCol>
                  </CRow>
                  <CRow className='mt-4 mb-4'>
                    <CCol md={6} xs={12}>
                      <CInput id="city" placeholder="Enter Box name" required />
                    </CCol>
                    <CCol md={6} xs={12}>
                      <CInput id="state" placeholder="Enter Box price" required />
                    </CCol>
                  </CRow>
                  <CRow className='mt-4 mb-4'>
                    <CCol md={6} xs={12}>
                      <CInput id="city" placeholder="Enter Box name" required />
                    </CCol>
                    <CCol md={6} xs={12}>
                      <CInput id="state" placeholder="Enter Box price" required />
                    </CCol>
                  </CRow>
                  <CRow className='mt-4 mb-4'>
                    <CCol md={6} xs={12}>
                      <CInput id="city" placeholder="Enter Box name" required />
                    </CCol>
                    <CCol md={6} xs={12}>
                      <CInput id="state" placeholder="Enter Box price" required />
                    </CCol>
                  </CRow>
                  <CRow className='mt-4 mb-4'>
                    <CCol md={6} xs={12}>
                      <CInput id="city" placeholder="Enter Box name" required />
                    </CCol>
                    <CCol md={6} xs={12}>
                      <CInput id="state" placeholder="Enter Box price" required />
                    </CCol>
                  </CRow>
                  <CRow className='mt-4 mb-4'>
                    <CCol md={6} xs={12}>
                      <CInput id="city" placeholder="Enter Box name" required />
                    </CCol>
                    <CCol md={6} xs={12}>
                      <CInput id="state" placeholder="Enter Box price" required />
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCollapse>
            </CCard>

          </div>
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default BoxPacking
