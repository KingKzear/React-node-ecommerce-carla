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
import { Container, Col, Row } from 'reactstrap';
import Styles from './styles.module.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Pagination from '@material-ui/lab/Pagination';

const fields = ['order', 'date', 'status', 'ship to', 'total', 'export status', 'action', 'count', 'edit']
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

const rows = [
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const AllOrders = () => {
  const classes = useStyles();

  return (
    <TheLayout>
      <CCard>
        <CCardHeader>
          All Stores
        </CCardHeader>
        <CCardBody>
          <Row>
            <Col xs={12}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">ORDER</StyledTableCell>
                      <StyledTableCell align="center">DATE</StyledTableCell>
                      <StyledTableCell align="center">STATUS</StyledTableCell>
                      <StyledTableCell align="center">SHOP TO</StyledTableCell>
                      <StyledTableCell align="center">TOTAL</StyledTableCell>
                      <StyledTableCell align="center">EXPORT STATUS</StyledTableCell>
                      <StyledTableCell align="center">ACTION</StyledTableCell>
                      <StyledTableCell align="center">ACCOUNT</StyledTableCell>
                      <StyledTableCell align="center">EDIT</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                        <StyledTableCell align="center">{row.address}</StyledTableCell>
                        <StyledTableCell align="center">{row.city}</StyledTableCell>
                        <StyledTableCell align="center">{row.state}</StyledTableCell>
                        <StyledTableCell align="center">{row.zipcode}</StyledTableCell>
                        <StyledTableCell align="center">{row.country}</StyledTableCell>
                        <StyledTableCell align="center">
                          <EditIcon />
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
          {/* <CDataTable
              items={[]}
              fields={fields}
              itemsPerPage={5}
              pagination
            /> */}
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default AllOrders
