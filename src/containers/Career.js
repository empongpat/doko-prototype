import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import 'assets/styles/css/pages/Career.css'

const categories = [
  { name: 'INFORMATION TECHNOLOGY', path: 'information_technology' }, { name: 'BUSINESS', path: 'business' },
  { name: 'ARTS', path: 'arts' },{ name: 'COMMUNICATION', path: 'communication' },
  { name: 'ENGINEER', path: 'engineer' }, { name: 'LAW', path: 'law' }
]

export default class Career extends React.Component {

  constructor(props) {
    super(props)
    this.state = { categories }
  }

  render() {

    const categoryDivs = this.state.categories.map(({ name, path }) => {
      return (
      <Col xs="12" md="6" lg="4" key={'catDiv' + name}>
        <Link to={`/career/${path}`}><button className="category-box">{name}</button></Link>
      </Col>
      )
    })
    
    return (
      <Container className="career-container">
        <Row>
          {categoryDivs}
        </Row>
      </Container>
    )
  }
}