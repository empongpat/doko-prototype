import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from 'helpers/variables'

const Div = styled.div`
  height: 200px;
  background: ${props => props.image_url
    ? "url('" + props.image_url + "')"
    : colors.white
  };
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  &:hover {
    &:before {
      background-color: ${props =>  props.active
        ? colors['theme-blue-half-opacity']
        : colors['theme-black-three-quarter-opacity']};  
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.active
      ? colors['theme-blue-three-quarter-opacity']
      : colors['theme-black-quarter-opacity']};
    z-index: 0;
  };
`

const Text = styled.span`
  color: ${colors.white};
  z-index: 1;
`

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: props.active
    }
  }

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    image_url: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    id: '',
    name: '',
    image_url: 'icons/splash.png',
    active: false,
  }

  toggle = () => {
    if (this.props.onClick) this.props.onClick()
    this.setState({
      active: !this.state.active
    })
  }

  render() {

    const { id, name, image_url } = this.props
    const key = 'CategoryItem' + id

    return (
      <Div key={key} image_url={image_url} active={this.state.active}
        onClick={this.toggle}>
        <Text>{name}</Text>
      </Div>
    )
  }
}