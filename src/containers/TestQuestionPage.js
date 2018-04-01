import React from 'react'
import { Badge, Button } from 'reactstrap'
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
      evalHasError: "",
      isTopicMenuExpanded: false,
      questionList: [],
      currentQuestionIdx: 0,
      disableNextButton: false,
      maxQuestionIdx: 0 // keep track of "highest" question answered, enable NEXT button when pressing PREV to already answered questions
    }
  }

  componentWillMount() {
    var thisObj = this
    axios.get('http://139.59.246.127:4000/questions')
      .then(function (response) {
        console.log("Questions")
        console.log(response);
        console.log(response.data.questions)
        thisObj.setState({
          questionList: response.data.questions,
          editorValue: response.data.questions[0].editorText,
          disableNextButton: response.data.questions[0].haveQuestion,
        })
      })
      .catch(function (error) {
        console.log("Questions err")
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
    })
  }

  submitAnswer = () => {
    axios.post('http://139.59.246.127:4000/eval', {
      'code': this.state.editorValue,
      'question': this.state.currentQuestionIdx
    })
      .then(function (response) {
        console.log("Eval res")
        console.log(response.data);
        return response.data
      })
      .catch(function (error) {
        console.log("Eval err")
        console.log(error);
      })
  }

  moveToQuestion = (DeltaIdx) => {
    const nextQuestionIdx = this.state.currentQuestionIdx + DeltaIdx
    if (nextQuestionIdx == this.state.questionList.length) {
      swal({
        title: "Congrats",
        text: `<img src="/images/awardjs.svg" style='width:150px;'>`,
        html: true,
      })
      return
    }
    if (nextQuestionIdx < 0) {
      return
    }
    this.setState({
      currentQuestionIdx: nextQuestionIdx,
      editorValue: this.state.questionList[nextQuestionIdx].editorText,
      evalValue: "",
      evalHasError: false,
      disableNextButton: nextQuestionIdx < this.state.maxQuestionIdx ? false : this.state.questionList[nextQuestionIdx].haveQuestion,
      maxQuestionIdx: Math.max(nextQuestionIdx, this.state.maxQuestionIdx)
    })
  }

  nextOnClick = () => {
    this.moveToQuestion(1)
  }

  prevOnClick = () => {
    this.moveToQuestion(-1)
  }

  runOnClick = () => {
    var thisObj = this
    axios.post('http://139.59.246.127:4000/eval', {
      'code': this.state.editorValue,
      'question': this.state.currentQuestionIdx
    })
      .then(function (response) {
        const evalResponse = response.data
        if (evalResponse.success) {
          swal({
            title: "Congrats",
            icon: "<img src='/images/awardjs.svg' style='width:150px;'>",
        })
          // swal(evalResponse.message, "", "success")
          thisObj.setState({
            evalValue: evalResponse.stdout,
            evalHasError: false,
            disableNextButton: false
          })
        } else {
          swal(evalResponse.message, "", "error")
          thisObj.setState({
            evalValue: evalResponse.stderr,
            evalHasError: true
          })
        }
      })
      .catch(function (error) {
        console.log("Eval err")
        console.log(error);
      })
  }


  render() {
    console.log('ren')
    console.log(this.state.questionList)
    return (
      <div className="theme-gray-bg h-100">
        <div className="row pt-3 m-0" style={ { "height": "calc(100% - 73px)" } }>
          <div className="col-4">
            <div className="box" >
              { this.state.questionList.length > 0 ?
                (<div><h3>{ this.state.questionList[this.state.currentQuestionIdx].title }</h3>
                  <span dangerouslySetInnerHTML={ { __html: this.state.questionList[this.state.currentQuestionIdx].text } }></span></div>) : null
              }

              <div className="topic-menu" style={ this.state.isTopicMenuExpanded ? { "height": "50%" } : { "height": "0%", "border": 0, "padding": 0 } }>
                <span onClick={ this.toggleTopicMenu }><i className="fas fa-angle-down expand-button active"></i></span>
                { this.state.isTopicMenuExpanded ?
                  <ul>
                    <li>Javascript: basics</li>
                    <li>Javascript: string operations</li>
                    <li>Javascript: arrays</li>
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
                <div className="box" id="console" style={ this.state.evalHasError ? { "color": "red" } : {} }>
                  { this.state.evalValue }
                  <Badge color="secondary">Console</Badge>
                </div>
              </div>
            </div>
            <div className="row" style={ { "height": "70%" } }>
              <div className="col-12 mt-3">
                <div className="box">
                  <Editor onChange={ this.editorOnChange } value={ this.state.editorValue } />
                  { this.state.questionList.length > 0 ?
                    <Button id="runButton" onClick={ this.runOnClick } disabled={ this.state.questionList[this.state.currentQuestionIdx].haveQuestion !== true } color="success" style={ { "position": "absolute", "bottom": 8, "right": 8, "zIndex": 999 } }>&nbsp;Run&nbsp;</Button>
                    : null }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 p-3 justify-content-center">
          <button className="btn-question-footer mr-3 px-5 py-1" onClick={ this.prevOnClick }>ย้อนกลับ</button>
          <button disabled={ this.state.disableNextButton } className="btn-question-footer ml-3 px-5 py-1" onClick={ this.nextOnClick }>ถัดไป</button>
        </div>
      </div>)
  }
}