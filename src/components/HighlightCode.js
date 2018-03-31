import React from 'react'
import Highlight from 'react-highlight'
import PropTypes from 'prop-types'

import 'assets/styles/css/components/monokai-sublime.css'

export default class HighlightCode extends React.Component {

  static propTyps = {
    language: PropTypes.string,
  }

  static defaultProps = {
    language: 'javascript'
  }

  render() {

    return (
      <Highlight className={this.props.language}>
        {this.props.children}
      </Highlight>
    )
  }
}