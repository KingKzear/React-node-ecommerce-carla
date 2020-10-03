import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Filter from './filter'
import FilteredItems from './filtered-items'
import Main from './../../components/container'
import './index.scss'

function SearchResult(props) {
  const { type } = props
  const [keyWord, setKeyWord] = useState('')

  return (
    <Main>
      <Container className='search-result-container'>
        <Row>
          <Col xs={12} sm={4} lg={3}>
            <Filter />
          </Col>
          <Col xs={12} sm={8} lg={9}>
            <FilteredItems />
          </Col>
        </Row>
      </Container>
    </Main>
  )
}

export default SearchResult