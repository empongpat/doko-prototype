import React from 'react'

import Editor from 'components/Editor'
import 'assets/styles/css/pages/QuestionPage.css'

export default class TestQuestionPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      editorValue: ""
    }
  }

  editorOnChange = (value) => {
    console.log(value)
    this.setState({
      editorValue: value
    })
  }

  runOnClick = () => {
    console.log(eval(this.state.editorValue))
  }

  render() {
    return (
      <div className="theme-gray-bg h-100">
        <div className="row pt-3 m-0">
          <div className="col-4">
            <div className="box">Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-12">
                <div className="box">
                  output placeholder
              </div>
              </div>
              <div className="col-12 mt-3">
                <div className="box">
                  {/* <button className="button" onClick={ this.runOnClick }>Run</button> */ }
                  <Editor onChange={ this.editorOnChange } value={ this.state.editorValue } />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 p-3 justify-content-center">
          <button className="btn-question-footer mr-3 px-5 py-1">BACK</button>
          <button className="btn-question-footer ml-3 px-5 py-1">NEXT</button>
        </div>
      </div>)
  }
}