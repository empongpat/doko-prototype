import React from 'react'
import CodeMirror from 'react-codemirror'
import 'assets/styles/css/components/CodeMirror.css'
import '../../node_modules/codemirror/mode/javascript/javascript'

export default class CodeMirrorContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: "// Write your code here",
    }
    this.updateCode = (newCode) => this.setState({
      code: newCode,
    })
  }

  render() {
    var options = {
      lineNumbers: true,
      mode: "javascript",
    }
    return (
      <div>
        <CodeMirror value={ this.state.code } onChange={ this.updateCode } options={ options } />
        {/* <input
          onClick={ this.getEditorText }
          type="button"
          value="Get editor text"
        /> */}
      </div>
    )
  }
}
