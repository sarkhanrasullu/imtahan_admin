import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { Component } from "react";
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
      <MDBContainer style={{paddingTop:'103px'}}>
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
    return <div>
        <MDBRow >
          <MDBCol md={3}>
            Adı:
          </MDBCol>
          <MDBCol>
            {selectedExam.name}
          </MDBCol>
          <MDBCol md={3}>
            Sektor:
          </MDBCol>
          <MDBCol>
            {selectedExam.sectorId.name}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md={3}>
            Qiyməti:
          </MDBCol>
          <MDBCol>
          {selectedExam.price} AZN
          </MDBCol>
          <MDBCol md={3}>
            Müddəti:
          </MDBCol>
          <MDBCol>
          {selectedExam.duration}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
             {selectedExam.description} 
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
    const {questions,selectedExam} = this.state;
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
}

export default ExamPagePublic;
