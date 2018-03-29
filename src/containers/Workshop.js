import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import WorkshopCard from 'components/WorkshopCard'

import 'assets/styles/css/pages/Workshop.css'

export default class Workshop extends React.Component {

  componentWillMount() {
    this.setState({
      cardData: new Array(6).fill(undefined)
    })
  }

  render() {
    const titleText = 'RELATED WORKSHOPS'
    const cards = this.state.cardData.map(data => {
      return <Col xs="12" md="6" lg="4" ><WorkshopCard /></Col>
    })

    return (
      <div className="workshop">
        <h1 className="workshop-title">{titleText}</h1>
        <Container>
          <Row>
            {cards}
          </Row>
        </Container>
      </div>
    )
  }
}