import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import Filter from './filter'
import FilteredItems from './filtered-items'
import Main from './../../components/container'
import './index.scss'

function SearchResult(props) {
  const { type } = props
  const [keyWord, setKeyWord] = useState('')

  return(
    <Main>
      <Container className='search-result-container'>
        <div className='row'>
          <Filter />
          <FilteredItems />
        </div>
      </Container>
    </Main>
  )
}

export default SearchResult