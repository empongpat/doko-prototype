import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import CategoryItem from 'components/CategoryItem'

const CAREER_INTEREST_DATA = [
  {
    id: 'accounting',
    name: 'ACCOUNTING',
    image_url: 'images/category_photos/accounting.jpg'
  },
  {
    id: 'consultant',
    name: 'CONSULTANT',
    image_url: 'images/category_photos/consultant.jpg'
  },
  {
    id: 'design',
    name: 'DESIGN',
    image_url: 'images/category_photos/design.jpg'
  },
  {
    id: 'education',
    name: 'EDUCATION',
    image_url: 'images/category_photos/education.jpg'
  },
  {
    id: 'engineering',
    name: 'ENGINEERING',
    image_url: 'images/category_photos/engineering.jpg'
  },
  {
    id: 'entrepreneur',
    name: 'ENTREPRENEUR',
    image_url: 'images/category_photos/entrepreneur.jpg'
  },
  {
    id: 'finance',
    name: 'FINANCE',
    image_url: 'images/category_photos/finance.jpg'
  },
  {
    id: 'hospitality',
    name: 'HOSPITALITY',
    image_url: 'images/category_photos/hospitality.jpg'
  },
  {
    id: 'information_technology',
    name: 'INFORMATION TECHNOLOGY',
    image_url: 'images/category_photos/information_technology.jpg'
  },
  {
    id: 'management',
    name: 'MANAGEMENT',
    image_url: 'images/category_photos/management.jpg'
  },
  {
    id: 'manufacturing',
    name: 'MANUFACTURING',
    image_url: 'images/category_photos/manufacturing.jpg'
  },
  {
    id: 'marketing',
    name: 'MARKETING/PUBLIC RELATIONS',
    image_url: 'images/category_photos/marketing.jpg'
  }
]

export default class CareerInterest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: CAREER_INTEREST_DATA,
      interests: ['accounting']
    }
  }

  itemOnClick = (id) => {
    return () => {
      let { interests } = this.state
      const active = interests.indexOf(id) !== -1
      if (!active) {
        interests.push(id)
      } else  {
        interests.splice(id, 1)
      }
      this.setState({ interests })
    }
  }

  render() {

    const { data, interests } = this.state
    const categoryItems = data.map((item) => {
      const key = 'InterestItem' + item.id
      const active = interests.indexOf(item.id) !== -1
      return <Col xs={12} sm={6} md={4} lg={3} key={key}>
              <CategoryItem onClick={this.itemOnClick(item.id)} active={active} {...item} />
            </Col>
    })

    return (
      <Container>
        <h1>Career Interests</h1>
        <Row>
          {categoryItems}
        </Row>
      </Container>
    )
  }
}