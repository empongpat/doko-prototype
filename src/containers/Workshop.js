import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import WorkshopCard from 'components/WorkshopCard'

import 'assets/styles/css/pages/Workshop.css'

export default class Workshop extends React.Component {

  render() {

    const titleText = 'RELATED WORKSHOPS'

    return (
      <div className="workshop">
        <h1 className="workshop-title">{titleText}</h1>
        <Container>
          <Row>
            <Col xs="12" md="6" lg="4" ><WorkshopCard /></Col>
            <Col xs="12" md="6" lg="4" ><WorkshopCard /></Col>
            <Col xs="12" md="6" lg="4" ><WorkshopCard /></Col>
            <Col xs="12" md="6" lg="4" ><WorkshopCard /></Col>
            <Col xs="12" md="6" lg="4" ><WorkshopCard /></Col>
            <Col xs="12" md="6" lg="4" ><WorkshopCard /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}