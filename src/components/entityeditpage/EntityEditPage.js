import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import EntityService from "../../services/EntityService";
import DynamicForm from "../dynamic_form/DynamicForm";
import LoadingSpinner from "../spinner/LoadingSpinner";
import NavbarWrapper from "../UI/NavbarWrapper";

class EntityEditPage extends Component {

  state = {
    loading: false,
    target:{}
  }

  entityService = new EntityService(this, this.props.endpoint_select, this.props.endpoint_add_or_save);

  componentWillMount(){ 
    if(this.props.defaultTarget){
      this.setState({target:this.props.defaultTarget});
    }
  }
  
  componentDidMount() {
      const edit = this.props.match.params.entityId>0;
      
      if(edit){
        this.entityService.loadItem(this.props.match.params.entityId);
      }
  }

  getRedirectUrl = () => {
    const redirect_url_primary = this.props.redirect_url_primary;

    if(redirect_url_primary){
      return redirect_url_primary;
    }

    var arr = window.location.href.split('/');
    var redirect_url = "";
    var lng = arr.length-1;
    for(var i=0;i<lng;i++){
      redirect_url+=arr[i];
      if(i!==lng-1){
        redirect_url+="/";
      }
    }
    return redirect_url;
  }

  handleSubmitBtn=(target) =>{
    this.entityService.saveItem(target, this.getRedirectUrl());
  }

  

  render() { 

    if(this.state.loading){
      return <LoadingSpinner/>;
    }

    const {fullscreen} = this.props;
    
    return (
      <React.Fragment>
        <NavbarWrapper notVisible={this.props.notVisible}/>
        <MDBContainer style={{ margin: "auto"}}>
              <MDBRow>
              
              {fullscreen?null:<MDBCol md={3}></MDBCol>}
              <MDBCol md={fullscreen?12:6}>
                  <DynamicForm
                    target={this.state.target}
                    sections={[
                      {
                        rows: this.props.formFields
                      }
                    ]}
                    submit={{
                      label: this.props.btnLabel?this.props.btnLabel:"Qəbul et",
                      action: this.handleSubmitBtn
                    }}
                  />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default withRouter(EntityEditPage);
