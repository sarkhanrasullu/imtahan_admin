import { MDBBtn } from 'mdbreact';
import React, { Component } from 'react';
import ModalWrapper from '../modalwrapper/ModalWrapper';

export default class ModalYesNo extends Component {


    toggle = ()=> {
        const {state} = this.props;
        state.show = !state.show;
        this.setState({});
    }

    renderYesButton = ()=>{
        const {onClickYes} = this.props;
        return <MDBBtn color="primary" onClick={onClickYes}>BƏLİ</MDBBtn>
    }

    renderNoButton = () =>{
        return <MDBBtn color="secondary" onClick={this.toggle}>İMTİNA ET</MDBBtn>
    }

    render() {
        const {title, state} = this.props;

        return (
            <ModalWrapper 
                show={state.show} 
                toggle={this.toggle}
                header={title?title:"Əminsiniz?"}
                footer={
                    [
                        this.renderYesButton(),
                        this.renderNoButton()
                    ]
                } />
        )
    }
}
