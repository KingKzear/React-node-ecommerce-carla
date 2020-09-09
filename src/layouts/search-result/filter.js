import React, { useState, useEffect } from 'react';
import CustomSelect from './custom-select'
import CustomLabel from './../../components/elements/custom-label'
import InStock from './in-stock'
import PriceRange from './price-range'
import './index.scss'

function Filter(props) {

  const [filterList, setFilterList] = useState({
    collections: [],
    styles: [],
    category: [],
    alloy_metal: [],
    stone_type: [],
    stone_colors: [],
    in_stock: '',
    price_from: '',
    price_to: '',
  })

  const [current, setCurrent] = useState({})

  useEffect(()=>{
    //call api to get all of the filter data list
    setFilterList({...filterList,
      collections:[
        {
          id: 0,
          name: 'Nancy B Color'
        },
        {
          id: 1,
          name: 'Nancy B Fashion'
        }
      ]
    })
  }, [])

  const resetFilter = () => {

  }

  const onControlChange = (type, name) => {
    setCurrent({...current, type: name})

    //TODO: call api and update the redux variable
  }

  return(
    <div className='filter col-lg-3 col-md-12 col-sm-12 col-xs-12 p-0'>
      <form>
        <div className='filter-item'>
          <CustomLabel position='top'>COLLECTIONS</CustomLabel>
          <CustomSelect data={filterList.collections} name={'collections'} onChange={onControlChange}/>
        </div>
        <div className='filter-item'>
          <CustomLabel position='top'>STYLES</CustomLabel>
          <CustomSelect data={filterList.styles} name={'styles'} onChange={onControlChange}/>
        </div>
        <div className='filter-item'>
          <CustomLabel position='top'>CATEGORY</CustomLabel>
          <CustomSelect data={filterList.category} name={'category'} onChange={onControlChange}/>
        </div>
        <div className='filter-item'>
          <CustomLabel position='top'>ALLOY/METAL</CustomLabel>
          <CustomSelect data={filterList.alloy_metal} name={'alloy_metal'} replaceChar={'/'} onChange={onControlChange}/>
        </div>
        <div className='filter-item'>
          <CustomLabel position='top'>STONE TYPE</CustomLabel>
          <CustomSelect data={filterList.stone_type} name={'stone_type'} replaceChar={' '} onChange={onControlChange}/>
        </div>
        <div className='filter-item'>
          <CustomLabel position='top'>STONE COLORS</CustomLabel>
          <CustomSelect data={filterList.stone_colors} name={'stone_colors'} replaceChar={' '} onChange={onControlChange}/>
        </div>
        <div className='filter-item'>
          <CustomLabel position='top'>IN STOCK</CustomLabel>
          <InStock />
        </div>
        <div className='filter-item'>
          <CustomLabel position='top'>PRICE RANGE</CustomLabel>
          <PriceRange />
        </div>
        <div className='filter-item'>
          <button type='button' className='reset-button' onClick={resetFilter}>Reset Filter</button>
        </div>
      </form>
    </div>
  )
}

export default Filter