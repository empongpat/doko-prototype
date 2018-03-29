import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import 'assets/styles/css/pages/Career.css'

const categories = [
  { name: 'INFORMATION TECHNOLOGY' }, { name: 'BUSINESS' }, { name: 'ARTS' },
  { name: 'COMMUNICATION' }, { name: 'ENGINEER' }, { name: 'LAW' }
]

export default class Career extends React.Component {

  constructor(props) {
    super(props)
    this.state = { categories }
  }

  render() {

    const categoryDivs = this.state.categories.map(({ name }) => {
      return (
      <Col xs="12" md="6" lg="4">
        <div className="category-box">{name}</div>
      </Col>
      )
    })
    
    return (
      <Container>
        <Row>
          {categoryDivs}
        </Row>
      </Container>
    )
  }
}