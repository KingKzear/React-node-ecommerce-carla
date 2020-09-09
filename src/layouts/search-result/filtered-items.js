import React, { useState, useEffect } from 'react';
import { Pagination } from '@material-ui/lab'
import { Row , Col } from 'react-bootstrap'
import ProductDetail from './../../components/product/product-detail'
import { ITEMS_PER_PAGES } from './../../const/constant'
import CustomLabel from './../../components/elements/custom-label'
import './index.scss'

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
      url: 'http://35.196.33.142:8060/DownloadImageFromInstance?imageId=90315GA.jpg',
    }
    let result = []
    let subResult = []
    for(let i = 0; i < itemsPerPage; i++) {
      if(i > 0 && i % 3 == 0){
        result.push(<Row>{subResult}</Row>)
        subResult = []
        subResult.push(<ProductDetail key={i} product={product}/>)
      } else if(i == itemsPerPage - 1) {
        subResult.push(<ProductDetail key={i} product={product}/>)
        result.push(<Row>{subResult}</Row>)
      } else {
        subResult.push(<ProductDetail key={i} product={product}/>)
      }      
    }
    return result
  }

  const onPageChange = (evt, value) => {
    setCurPage(value)
  }

  return(
    <div className='result-container col-lg-9 col-md-12 col-sm-12 col-xs-12'>
      <div className='header'>
        <div className='total'>Found {total} results</div>
        <div className='items-per-page'>
          <CustomLabel position='left'>Items Per Page:</CustomLabel>
          <select onChange={onChangeItemsPerPage}>
            {renderPerPageItems()}
          </select>
        </div>
      </div>
      <div className='content'>
        {renderContents()}
      </div>
      <div className='footer'>
        <Pagination count={Math.ceil(total / itemsPerPage)} page={curPage} variant="outlined" shape="rounded" onChange={onPageChange} />
      </div>
    </div>
  )
}

export default FilteredItems