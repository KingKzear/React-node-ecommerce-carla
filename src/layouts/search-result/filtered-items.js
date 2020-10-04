import React, { useState, useEffect } from 'react';
import { Pagination } from '@material-ui/lab'
import { Row, Col } from 'react-bootstrap'
import ProductDetail from './../../components/product/product-detail'
import { ITEMS_PER_PAGES } from './../../const/constant'
import CustomLabel from './../../components/elements/custom-label'
import './index.scss'
import Styles from './style.module.css'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function FilteredItems(props) {
  const [total, setTotal] = useState(8374)
  const [curPage, setCurPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGES[0])

  const renderPerPageItems = () => {
    let result = []
    ITEMS_PER_PAGES.forEach((el, index) => {
      result.push(<option value={index} key={index}>{el}</option>)
    });
    return result;
  }

  const onChangeItemsPerPage = (evt) => {
    setItemsPerPage(ITEMS_PER_PAGES[evt.target.value] == 'All' ? total : ITEMS_PER_PAGES[evt.target.value])
  }

  const renderContents = () => {
    const product = {
      productId: '90315GA',
      productName: '14KY 7X5 OVAL GARNET ',
      url: 'https://carlacorp.com/wp-content/uploads/product_images/21-4160.jpg',
    }
    let result = []
    let subResult = []
    for (let i = 0; i < itemsPerPage; i++) {
      if (i > 0 && i % 3 == 0) {
        result.push(<Row style={{ width: '100%' }}>{subResult}</Row>)
        subResult = []
        subResult.push(<ProductDetail key={i} product={product} />)
      } else if (i == itemsPerPage - 1) {
        subResult.push(<ProductDetail key={i} product={product} />)
        result.push(<Row>{subResult}</Row>)
      } else {
        subResult.push(<ProductDetail key={i} product={product} />)
      }
    }
    return result
  }

  const onPageChange = (evt, value) => {
    setCurPage(value)
  }

  return (
    <div style={{ width: '100%' }}>
      <Row>
        <Col xs={12} lg={12} className={Styles.contentheader}>
          <div className={Styles.total}>Found {total} results</div>
          <FormControl
            variant="outlined"
            onChange={onChangeItemsPerPage}
            style={{ width: 120 }}
          >
            <InputLabel htmlFor="outlined-age-native-simple">Items Per Page:</InputLabel>
            <Select
              native
              label="ALL COLLECTION"
            >
              {renderPerPageItems()}
            </Select>
          </FormControl>
        </Col>
      </Row>
      <Row>
        {renderContents()}
      </Row>
      <Row style={{ justifyContent: 'center', marginTop: 100 }}>
        <div>
          <Pagination
            count={Math.ceil(total / itemsPerPage)}
            page={curPage}
            color="primary"
            onChange={onPageChange}
          />
        </div>
      </Row>
    </div >
  )
}

export default FilteredItems