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

    const loggedInUser = this.service.getLoggedInUser();
    if(loggedInUser!==null){
        // <h4 className="text-center" style={{ margin: "auto", marginTop:"10%" }}>
        //   Uğurla daxil oldunuz. <a href="http://www.imtahanlar.az" target="_blank">Əsas səhifəyə geri dön!</a>
        // </h4>
        window.location.href = 'http://www.imtahanlar.az';
        return null;
    }
    if(this.state.loading){
      return <LoadingSpinner/>;
    }

    return (
        <MDBContainer style={{ margin: "auto", marginTop:"10%" }}>
          <MDBRow>
            <MDBCol md="3" />
            <MDBCol md="6">
            <DynamicForm 
                      component={this}
                      sections={formFields}
                      submit={
                          {
                              label: "Daxil ol",
                              action: (target)=>{this.service.handleLogin(target)}
                          }
                      }
                    />
            </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="3" />
            <MDBCol md="6">
            <h6 className="text-center w-100 mt-3 forget">
                <a href="http://www.imtahanlar.az/registration" target="_blank">Şifrəni Unutmusan?</a> 
                </h6>
            <h6 className="text-center w-100 mt-1 forget">Hesabın yoxdur? 
            <a href="http://www.imtahanlar.az/registration" target="_blank">Qeydiyyat</a> 
            </h6>
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
