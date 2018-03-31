import React from 'react'
import AceEditor from 'react-ace'
import PropTypes from 'prop-types'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

export default class Editor extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string
  }

  static defaultProps = {
    defaultValue: ''
  }

  onChange = (newValue) => {
    console.log('Change', newValue)
  }

  render() {

    const { defaultValue } = this.props

    return (
      <AceEditor
        mode={'javascript'}
        theme={'monokai'}
        onChange={this.onChange}
        name="EDITOR"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        defaultValue={defaultValue}
        setOptions={{
          showLineNumbers: true
        }} />
    )
  }
}