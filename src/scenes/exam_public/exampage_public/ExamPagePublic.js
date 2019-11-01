import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { Component } from "react";
import Countdown from 'react-countdown-now';
//import { withRouter } from "react-router-dom";
import LoadingSpinner from '../../../components/spinner/LoadingSpinner';
import EntityService from '../../../services/EntityService';
import './exampage.css';

class ExamPagePublic extends Component {

  examService = new EntityService(this);

  state = {
    loading: true,
    selectedExam:null,
    target:{},
    questions:[]
  }

  componentDidMount(){
    this.loadExam(this.loadQuestions);
 }

  loadExam = ()=>{
    this.setLoading(true);
    fetch('/api/exams')
            .then(response =>  response.json())
            .then(response => {
                    const firstElementKey = Object.keys(response._embedded)[0];
                    const list = response._embedded[firstElementKey];
                    const state = this.state;
                    const examIndex = this.props.match.params.examId;
                    const selectedExam = list[examIndex-1];
                    state.selectedExam = selectedExam;
                    this.loadQuestions(selectedExam);
            })
            .catch((error) => {
              this.setLoading(false);
            });
  }

  loadQuestions = (exam)=>{
    console.log('questions load');
    this.setLoading(true);
    fetch('/api/exams/'+exam.id+'/examQuestionList')
            .then(response =>  response.json())
            .then(response => {
                    const firstElementKey = Object.keys(response._embedded)[0];
                    const list = response._embedded[firstElementKey];
                    const state = this.state;
                    state.questions = list;
                    this.component.setState(state);
                    this.setLoading(false);
            })
            .catch((error) => {
              this.setLoading(false);
            });
  }

  setLoading = (loading, errorMsg, successMsg)=>{
                  const {state} = this;
                  state.loading = loading;
                  state.errorMsg = errorMsg;
                  state.successMsg = successMsg;
                  this.setState(state);
  }
            

  render() {
    if(this.state.loading){
      return <LoadingSpinner/>;
    }
    const selectedExam = this.state.selectedExam;
    if(!selectedExam) return null;

    return this.renderBody();
  }

  renderBody = ()=>{
    return <React.Fragment>
      <div style={
                    {
                      position:'fixed',
                      width:'100%',
                      zIndex: 1,
                      backgroundColor: '#fff',
                      borderBottom: '1px solid'
                    }
    }>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              {this.renderInfo()}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer style={{paddingTop:'120px'}}>
        <MDBRow>
          <MDBCol md={8}>
            {this.renderQuestionBody()}
          </MDBCol>
          <MDBCol>
            {this.renderAnswersBody()}
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </React.Fragment>
  }

  renderInfo = ()=>{
    const {selectedExam} = this.state;
    return <div style={{width:'80%'}}>
        <MDBRow >
          <MDBCol md={1}>
            Adı:
          </MDBCol>
          <MDBCol  md={3}>
            {selectedExam.name}
          </MDBCol>
          <MDBCol md={1}>
            Sektor:
          </MDBCol>
          <MDBCol  md={1}>
            {selectedExam.sectorId.name}
          </MDBCol>
          <MDBCol md={1}>
            Qiyməti:
          </MDBCol>
          <MDBCol  md={2}>
          {selectedExam.price} AZN
          </MDBCol>
          <MDBCol md={1}>
            Müddəti:
          </MDBCol>
          <MDBCol  md={2}>
          {this.counter(selectedExam.duration)}
          </MDBCol> 
          <MDBCol >
              <MDBBtn color="danger">İMTAHANDAN ÇIX</MDBBtn>
          </MDBCol>
        </MDBRow>
    </div>
  }

  renderQuestionBody = ()=>{
    const {questions} = this.state;
    const question = questions[0];
      return <React.Fragment>
              <MDBRow>
                <MDBCol>
                <div className="question-body" dangerouslySetInnerHTML={{__html: question.question.replace('<p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>', '')}} >
                  
                </div>
                </MDBCol>
              </MDBRow>
            </React.Fragment>
  }

  renderAnswersBody = ()=>{
    const {questions} = this.state;
    const question = questions[0];
    const rightAnswersSplitted = question.rightAnswer.split(',');
    const rightAnswerRadioButtons = [];
    
    rightAnswersSplitted.forEach((value, index)=>{
      rightAnswerRadioButtons.push(this.renderRegularAnswer(index,4));
    });
            return <div style={{position: "fixed"}}>
                      {/* <div style={{marginBottom:'50px'}}>{this.renderInfo()}</div> */}
                      {/* <div style={{marginBottom:'50px'}}>{selectedExam.description}</div> */}
                      <div>{rightAnswerRadioButtons}</div>
                      <MDBBtn color="danger" style={{marginTop:"80px"}}>İMTAHANI BİTİR</MDBBtn>
                </div> 
  }

  renderRegularAnswer = (index, elemSize)=>{
    const answers = [];
    const variants = ['A','B','C','D','E'];
    for(var i=0;i<elemSize;i++){
      answers.push(
        <span key={i} style={{marginLeft:"10px"}}>
          <span>{variants[i]}</span>
          <input
              type="radio"
              name={index+"_answers"}
              value={variants[i]}
              style={{marginLeft: "5px", height: "18px"}}
              />
        </span>
      )
    }
    return <div style={{fontSize:"20px"}}>
                <span>{index+1}.</span>
                {answers}
          </div>;
  }

  renderer = ({ hours, minutes, seconds, completed }) => {
    hours = hours>9?hours:"0"+hours;
    minutes = minutes>9?minutes:"0"+minutes;
    seconds = seconds>9?seconds:"0"+seconds;
    return <span style={{color:"red", fontWeight:"600"}}>{hours}:{minutes}:{seconds}</span>;
  };
   
  counter = (hourMinSecond)=>{//hh:mm:ss
    const arr    = hourMinSecond.split(":");
    const hour   = arr[0];
    const min    = arr.length>1?arr[1]:0;
    const second = arr.length>2?arr[2]:0;
    return <Countdown
      date={Date.now() + (hour*60*60+min*60+second)*1000}
      renderer={this.renderer}
    />
  }
  
  

}

export default ExamPagePublic;
