import React, { useState } from 'react';
import { Capitalizer } from './../../util/func-util'
import './index.scss'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function CustomSelect(props) {
  const { data, name, replaceChar, onChange } = props
  const [value, setValue] = useState(0)

  const renderOptions = () => {
    let result = []
    result.push(<option value='0'>All {Capitalizer(name, replaceChar)}</option>)
    // result.push(<option aria-label="None" value="" />);
    console.log(data)
    data.forEach((el, index) => {
      result.push(<option key={index} value={el.id}>{el.name}</option>)
    });
    return result;
  }

  const onSelectChange = (evt) => {
    const selected = evt.target.alue
    setValue(selected)
    onChange(name, value)
  }

  return (
    <FormControl
      variant="outlined"
      onChange={onSelectChange}
      style={{ width: '100%' }}
    >
      <InputLabel htmlFor="outlined-age-native-simple">{Capitalizer(name, replaceChar)}</InputLabel>
      <Select
        native
        label="ALL COLLECTION"
      >
        {renderOptions()}
      </Select>
    </FormControl>
    // <select onChange={onSelectChange}>
    //   {renderOptions()}
    // </select>
  )
}

export default CustomSelect