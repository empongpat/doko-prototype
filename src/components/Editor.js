import React from 'react'
import AceEditor from 'react-ace'
import PropTypes from 'prop-types'

import 'brace/mode/javascript'
// import 'brace/theme/monokai'

export default class Editor extends React.Component {

  constructor(props){
    super(props)
  }
  
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    value: '',
    onChange: function(){}
  }
  
  onChange = (newValue) =>{
    this.props.onChange(newValue)
  }

  render() {

    const { value } = this.props

    return (
      <AceEditor
        mode={'javascript'}
        // theme={'monokai'}
        onChange={this.onChange}
        name="EDITOR"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        setOptions={{
          showLineNumbers: true
        }}
        height="100%"
        width="100%"
        debounceChangePeriod={500}
        />
    )
  }
}