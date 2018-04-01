import React from 'react'
import { Button } from 'reactstrap'
import Editor from 'components/Editor'
import 'assets/styles/css/pages/QuestionPage.css'
import swal from 'sweetalert'
import axios from 'axios'
import fontawesome from '@fortawesome/fontawesome'
import angleUp from '@fortawesome/fontawesome-free-solid/faAngleUp'
import angleDown from '@fortawesome/fontawesome-free-solid/faAngleDown'
fontawesome.library.add(angleUp)
fontawesome.library.add(angleDown)

export default class TestQuestionPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      editorValue: "",
      evalValue: "",
      isTopicMenuExpanded: false
    }
  }

  componentWillMount() {
    axios.get('https://139.59.246.127/questions')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  toggleTopicMenu = () => {
    console.log("set")
    this.setState({
      isTopicMenuExpanded: !this.state.isTopicMenuExpanded
    })
  }

  editorOnChange = (value) => {
    console.log(value)
    this.setState({
      editorValue: value,
      evalValue: value + " answer"
    })
  }

  submitOnClick = () => {
    swal("Good job!", "You clicked the button!", "success");
  }

  render() {
    console.log(this.state.isTopicMenuExpanded)
    return (
      <div className="theme-gray-bg h-100">
        <div className="row pt-3 m-0" style={ { "height": "calc(100% - 73px)" } }>
          <div className="col-4">
            <div className="box" >Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text Question text
             <div className="topic-menu" style={ this.state.isTopicMenuExpanded ? { "height": "50%" } : { "height": "0%", "border": 0, "padding": 0 } }>
                <span onClick={ this.toggleTopicMenu }><i className="fas fa-angle-down expand-button active"></i></span>
                { this.state.isTopicMenuExpanded ?
                  <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                  </ul>
                  : null
                }
                { this.state.isTopicMenuExpanded ?
                  null
                  :
                  <span onClick={ this.toggleTopicMenu }><i className="fas fa-angle-up expand-button"></i></span>
                }
              </div>

            </div>

          </div>
          <div className="col-8">
            <div className="row" style={ { "height": "30%" } }>
              <div className="col-12">
                <div className="box">
                  { this.state.evalValue }
                </div>
              </div>
              {/* <div className="col-12 mt-3">
                <div className="box">
                  <Editor onChange={ this.editorOnChange } value={ this.state.editorValue } />
                </div>
              </div> */}
            </div>
            <div className="row" style={ { "height": "70%" } }>
              {/* <div className="col-12">
                <div className="box">
                  { this.state.evalValue }
                </div>
              </div> */}
              <div className="col-12 mt-3">
                <div className="box">
                  <Editor onChange={ this.editorOnChange } value={ this.state.editorValue } />
                  <Button color="success" style={ {"position": "absolute", "bottom": 8, "right":8, "zIndex": 999} }>Run</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 p-3 justify-content-center">
          <button className="btn-question-footer mr-3 px-5 py-1">BACK</button>
          <button className="btn-question-footer ml-3 px-5 py-1" onClick={ this.submitOnClick }>NEXT</button>
        </div>
      </div>)
  }
}