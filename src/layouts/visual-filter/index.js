import React, { useState, useEffect } from 'react';
import Main from './../../components/container'
import FilterItems from './filter-items'
import history from './../../history'
import './index.scss'

function VisualFilter(props) {
  const [level, setLevel] = useState(0)
  const [filterData, setFilterData] = useState({})
  useEffect(()=>{

  }, [])

  const onItemClick = (filter) => {
    if(level < 3) {
      setLevel(level + 1)
      setFilterData({...filterData, ...filter})
    } else {
      console.log(filterData)
      //TODO: navigate to search result page with filtered data
      history.push('/search-result')
    }
  }

  const onClickViewAll = () => {
    console.log(filterData)
    //TODO: navigate to search result page with filtered data
    history.push('/search-result')
  }

  return(
    <Main>
      <div className='visual-filter-container'>
        <div className='filter-area'>
          <img src='https://c.zmags.com/assets/images/5bc0c8b5cf2e0f7a92155c86-optimized.jpeg' className='w-100 h-100'/>
          <div className='overlay'>
            <FilterItems level={level} onItemClick={onItemClick} onClickViewAll={onClickViewAll}/>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default VisualFilter