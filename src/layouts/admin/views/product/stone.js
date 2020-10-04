import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'
import TheLayout from './../../containers/TheLayout'
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { Col, Row } from 'reactstrap';
import Styles from './styles.module.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Pagination from '@material-ui/lab/Pagination';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FixedTextField from '../../../../components/FixedTextField';
const fields = ['id', 'name', 'description', 'slug', 'count', 'action']
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, name, description, count) {
  return { id, name, description, count };
}

const rows = [
  createData('1', 'Nancy B Color', 'Nancy B Color', '0'),
  createData('2', 'Nancy B Fashion', 'Nancy B Fashion', '0'),
  createData('3', 'Carla', 'Carla', '0'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

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

const combo1 = [
  { title: 'Active' },
  { title: 'Inactive' },
]

const combo2 = [
  { title: 'Nancy B Color' },
  { title: 'Nancy B Fashion' },
  { title: 'Carla' },
]

const CollectionsComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TheLayout>
      <CCard>
        <CCardHeader>
          All Stone Color
        </CCardHeader>
        <CCardBody>
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
              <DialogTitle id="alert-dialog-slide-title" style={{ backgroundColor: '#db4b31', color: '#fff' }}>{"Create Collection"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <div>
                    <div>
                      <CssTextField
                        placeholder="Name"
                        style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                      />
                    </div>
                    <div>
                      <Autocomplete
                        options={combo1}
                        getOptionLabel={(option) => option.title}
                        style={{ width: '100%', padding: 10 }}
                        renderInput={(params) => <CssTextField {...params} />}
                      />
                    </div>
                    <div>
                      <Autocomplete
                        options={combo2}
                        getOptionLabel={(option) => option.title}
                        style={{ width: '100%', padding: 10 }}
                        renderInput={(params) => <CssTextField {...params} />}
                      />
                    </div>
                    <div>
                      <CssTextField
                        multiline
                        rows={6}
                        placeholder="description"
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
          <Row>
            <Col xs={12} className={Styles.content}>
              <Row>
                <Col xs={12}>
                  <Button variant="contained" color="primary" className={Styles.btnAdd} onClick={() => { document.getElementById('btn-add').click(); }}>
                    ADD NEW
              </Button>
                </Col>
              </Row>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">ID</StyledTableCell>
                      <StyledTableCell align="center">NAME</StyledTableCell>
                      <StyledTableCell align="center">DESCRIPTION</StyledTableCell>
                      <StyledTableCell align="center">COUNT</StyledTableCell>
                      <StyledTableCell align="center">EDIT</StyledTableCell>
                      <StyledTableCell align="center">DELETE</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell align="center">{row.id}</StyledTableCell>
                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                        <StyledTableCell align="center">{row.description}</StyledTableCell>
                        <StyledTableCell align="center">{row.count}</StyledTableCell>
                        <StyledTableCell align="center">
                          <EditIcon style={{ cursor: 'pointer' }}
                            onClick={() => { document.getElementById('btn-add').click(); }}
                          />
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <DeleteForeverIcon style={{ cursor: 'pointer' }} />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={Styles.pagenationDiv}>
              <Pagination count={10} color="primary" className={Styles.pagination} />
            </Col>
          </Row>
        </CCardBody>
      </CCard>
    </TheLayout >
  )
}

export default CollectionsComponent
