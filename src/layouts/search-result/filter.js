import React, { useState, useEffect } from 'react';
import CustomSelect from './custom-select'
import CustomLabel from './../../components/elements/custom-label'
import InStock from './in-stock'
import PriceRange from './price-range'
import './index.scss'
import Styles from './style.module.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
  const [stockvalue, setStockvalue] = React.useState('all');

  useEffect(() => {
    //call api to get all of the filter data list
    setFilterList({
      ...filterList,
      collections: [
        {
          id: 0,
          name: 'Nancy B Color'
        },
        {
          id: 1,
          name: 'Nancy B Fashion'
        }
      ],
      // styles: [
      //   {
      //     id: 0,
      //     name: 'sadfsdf'
      //   },
      //   {
      //     id: 1,
      //     name: 'sfadfasd'
      //   }
      // ]
    })
  }, [])

  const onControlChange = (type, name) => {
    setCurrent({ ...current, type: name })

    //TODO: call api and update the redux variable
  }

  const handleChangeStock = (event) => {
    setStockvalue(event.target.value);
  };

  return (
    <div style={{ width: '100%' }}>
      <div className={Styles.filteritem}>
        {/* <CustomLabel position='top'>COLLECTIONS</CustomLabel> */}
        <CustomSelect data={filterList.collections} name={'collections'} onChange={onControlChange} />
      </div>
      <div className={Styles.filteritem}>
        {/* <CustomLabel position='top'>STYLES</CustomLabel> */}
        <CustomSelect data={filterList.styles} name={'styles'} onChange={onControlChange} />
      </div>
      <div className={Styles.filteritem}>
        {/* <CustomLabel position='top'>CATEGORY</CustomLabel> */}
        <CustomSelect data={filterList.category} name={'category'} onChange={onControlChange} />
      </div>
      <div className={Styles.filteritem}>
        {/* <CustomLabel position='top'>ALLOY/METAL</CustomLabel> */}
        <CustomSelect data={filterList.alloy_metal} name={'alloy_metal'} replaceChar={'/'} onChange={onControlChange} />
      </div>
      <div className={Styles.filteritem}>
        {/* <CustomLabel position='top'>STONE TYPE</CustomLabel> */}
        <CustomSelect data={filterList.stone_type} name={'stone_type'} replaceChar={' '} onChange={onControlChange} />
      </div>
      <div className={Styles.filteritem}>
        {/* <CustomLabel position='top'>STONE COLORS</CustomLabel> */}
        <CustomSelect data={filterList.stone_colors} name={'stone_colors'} replaceChar={' '} onChange={onControlChange} />
      </div>
      <div className={Styles.filteritem}>
        <FormControl component="fieldset">
          <FormLabel component="legend">IN STOCK</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={stockvalue} onChange={handleChangeStock}>
            <FormControlLabel value="all" control={<Radio />} label="All Items" />
            <FormControlLabel value="stock" control={<Radio />} label="In Stock" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={Styles.filteritem}>
        <CustomLabel position='top'>PRICE RANGE</CustomLabel>
        <PriceRange />
      </div>
    </div>
  )
}

export default Filter