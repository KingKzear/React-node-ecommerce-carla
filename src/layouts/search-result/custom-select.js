import React, {useState} from 'react';
import { Capitalizer } from './../../util/func-util'
import './index.scss'

function CustomSelect(props) {
  const { data, name, replaceChar, onChange } = props
  const [value, setValue] = useState(0)

  const renderOptions = () => {
    let result = []
    result.push(<option value='0'>All {Capitalizer(name, replaceChar)}</option>)
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

  return(
    <select onChange={onSelectChange}>
      {renderOptions()}
    </select>
  )
}

export default CustomSelect