import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'

import 'assets/styles/css/pages/CareerList.css'

const INFO_TECH_DATA = [
  { name: 'IOS DEV', path: 'ios_dev' }, { name: 'ANDROID DEV', path: 'android_dev' },
  { name: 'BACKEND DEV', path: 'backend_dev' }, { name: 'FRONTEND DEV', path: 'frontend_dev' },
  { name: 'IT SUPPORT', path: 'it_support' }, { name: 'TECHNOLOGY CONSULTANT', path: 'technology_consultant' }
]

export default class CareerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      success: true,
      data: []
    }
  }

  componentWillMount() {
    this.getCareers()
  }

  setTitle = () => {
    let categoryPath = this.props.match.params.category || ''
    let fragments = categoryPath.split('_')
    fragments = fragments.map(item => {
      return item.toUpperCase()
    })
    let title = fragments.join(' ')
    this.setState({ title })
  }

  getCareers = () => {
    let success = this.props.match.params.category === 'information_technology'
    if (success) {
      this.setState({ success, data: INFO_TECH_DATA })
      this.setTitle()
    } else {
      this.setState({ success })
    }
  }
 
  render() {

    const { title } = this.state

    const careers = this.state.data.map(({ name, path }) => {
      return (
        <Col xs="12" md="6" key={'careerList' + name}>
          <Link to={`${this.props.match.url}/${path}`} className="career-list-box">
              {name}
          </Link>
        </Col>
      )
    })

    return this.state.success ? (
      <Container className="career-list">
        <h1 className="career-details-title">{title}</h1>
        <Row>
          {careers}
        </Row>
      </Container>
    ) : (
      <Redirect to="/career"/>
    )
  }
}
