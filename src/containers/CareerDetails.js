import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import 'assets/styles/css/pages/CareerDetails.css'

const IOS_DEV_DATA = {
  name: 'IOS DEV',
  description: "Develop and maintain applications for mobile devices powered by Apple's mobile operating system.",
  requiredSkills: ['Objective-C', 'GIT', 'Swift', 'CocoaPods', 'RESTful', 'Xcode'],
  averageSalary: 50000,
  salaryCurrency: 'Baht',
  companies: [
    'https://www.wongnai.com/static2/images/moPhNmE.png',
    'https://nextzy.me/static/media/logo_nextzy_black.8e12a6f6.png',
    'https://d.line-scdn.net/n/_s1/_0/linecorp-web-uit/images/line_icon_200_v3.jpg',
    'https://workablehr.s3.amazonaws.com/uploads/account/logo/26537/large_logo-horizontal-1024.png'
  ],
  careerPath: ['Junior IOS Dev', 'Senior IOS Dev', 'System Analyst', 'CTO'],
  testimonies: [
    {
      name: 'name',
      postion: 'postion',
      pic: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-md.png'
    },
    {
      name: 'name',
      postion: 'postion',
      pic: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-md.png'
    },
    {
      name: 'name',
      postion: 'postion',
      pic: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-md.png'
    }
  ]
}

export default class CareerDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      success: true,
      data: {}
    }
  }

  componentWillMount() {
    this.fetchDetails()
  }

  fetchDetails = () => {
    let { category, name } = this.props.match.params
    let success = category === 'information_technology' && name === 'ios_dev'
    if (success) {
      this.setState({ success, data: IOS_DEV_DATA })
    } else {
      this.setState({ success })
    }
  }

  render() {

    const { data } = this.state

    const RequiredSkills = () => (
      <Col sm="12" md="4">
        <h4 className="career-stat-title">Required Skills</h4>
        <div className="career-skill-tag-container">
          {data.requiredSkills.map(skill => {
            return <div className="career-skill-tag" key={'skillTag' + skill}>{skill}</div>
          })}
        </div>
      </Col>
    )
    const AverageSalary = () => (
      <Col sm="12" md="4">
         <h4 className="career-stat-title">Average Salary</h4>
         <div className="career-salary">{Number(data.averageSalary).toLocaleString('th')}</div>
         <div className="career-salary-currency">{data.salaryCurrency}</div>
      </Col>
    )
    const Companies = () => (
      <Col sm="12" md="4">
        <h4 className="career-stat-title">Companies</h4>
        <Row>
          {data.companies.map((url, i) => {
            return <div className="career-company-image-wrapper" key={'careerCompany' + i}><img src={url} alt="#"/></div>
          })}
        </Row>
      </Col>
    )
    const CareerPath = () => {
      const length = data.careerPath.length
      const Div = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em;
        color: ${props => props.gradient 
          ? 'rgba(38, 42, 50,' + props.gradient + ')'
          : 'rgba(38, 42, 50)'
        };
        border: ${props => props.gradient
          ? '2px solid rgba(38, 42, 50,' + props.gradient + ')'
          : '2px solid rgba(38, 42, 50)'
        };
        margin-right: 80px;
        &:last-child {
          margin-right: 0;
        }
      `
      return (
        <Col sm="12">
          <h4 className="career-stat-title">Career Path</h4>
          <div className="career-careerpath-container">
            {data.careerPath.map((name, i) => {
              const gradient = (i + 1) / length
              return (
                <Div key={'careerPath' + i} gradient={gradient} className="career-careerpath-items">{name}</Div>
              )
            })}
          </div>
        </Col>
      )
    }

    return (
      <div>
        <h2 className="career-name">{data.name}</h2>
        <p className="career-description">{data.description}</p>
        <Container>
          <Row className="career-stat-row">
            <RequiredSkills />
            <AverageSalary />
            <Companies />
          </Row>
          <Row className="career-stat-row">
            <CareerPath />
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    )
  }
}