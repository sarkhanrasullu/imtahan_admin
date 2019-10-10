import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { Component } from "react";
import { connect } from "react-redux";
import { InputField } from "../../components/datatable/DataTableTypes";
import DynamicForm from "../../components/dynamic_form/DynamicForm";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import LoginService from "../../services/LoginService";
import * as actions from "../../store/actions/index";

const formFields = [
  {
    rows:[
        {
          items:[
            new InputField("target.user.email","Email"),
          ]
        },
        {
          items:[
            new InputField("target.user.password", "Password", "password"),
          ]
        }
    ]
  }
];

class Login extends Component {

  state = {
    loading: false
  }

  service = new LoginService(this);
 
  render() {
    if(this.state.loading){
      return <LoadingSpinner/>;
    }

    return (
        <MDBContainer style={{ margin: "auto" }}>
          <MDBRow>
            <MDBCol md="3" />
            <MDBCol md="6">
            <DynamicForm 
                      component={this}
                      sections={formFields}
                      submit={
                          {
                              label: "Login",
                              action: (target)=>{this.service.handleLogin(target)}
                          }
                      }
                    />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  } 
}

const mapStateToProps = state => {
  return {
    isLoading: state.loading.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: loading => dispatch(actions.setLoading(loading))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(Login);
