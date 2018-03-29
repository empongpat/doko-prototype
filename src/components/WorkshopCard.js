import React from 'react' 
import { Card, CardImg, CardText, CardBody } from 'reactstrap' 
import PropTypes from 'prop-types' 
import moment from 'moment' 

import 'assets/styles/css/components/WorkshopCard.css'
import imageSrc from 'assets/images/card_placeholder.png'
 
export default class WorkshopCard extends React.Component { 
 
  static propTypes = { 
    image: PropTypes.string, // url 
    title: PropTypes.string, 
    date: function(props, propName, componentName) { 
      return moment.isMoment(props)  
    }, 
    location: PropTypes.string, 
    buttonText: PropTypes.string, 
  } 
 
  static defaultProps = { 
    image: imageSrc, 
    title: 'Title', 
    date: moment().add(1, 'month'), 
    location: 'Bangkok', 
    buttonText: 'REGISTER NOW' 
  } 
 
  render() { 
 
    const { image, title, date, location, buttonText } = this.props 
    const formattedDate = moment(date).format('MMM D') 
 
    return ( 
      <div> 
        <Card className="card" > 
          <CardImg top src={image} width="100%" alt={title} /> 
          <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
            <h3 className="title">{title}</h3> 
            <div className="details-container"> 
              <CardText>{formattedDate}</CardText> 
              <p style={{ marginLeft: '1em', marginRight: '1em' }}>|</p> 
              <CardText>{location}</CardText> 
            </div> 
            <button className="button">{buttonText}</button> 
          </CardBody> 
        </Card> 
      </div> 
    ) 
  } 
}