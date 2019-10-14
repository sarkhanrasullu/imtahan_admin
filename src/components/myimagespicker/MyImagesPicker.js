import { MDBBtn, MDBCol, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import StateUtil from '../../utils/StateUtil';
import { InputField } from '../datatable/DataTableTypes';
import MyImagePicker from '../myimagepicker/MyImagePicker';

export default class MyImagesPicker extends Component {

    render() {
        const {item, error, readOnly, component, key } = this.props;
        const {name} = item;
        let list = StateUtil.get(component.state, name);
        let imagePickerList = null;
        //console.log(list);
        if(list!==null) {
            imagePickerList = list.map((image, index)=>{
                const nm = name+"."+index+".mediafile";
                return (
                    <MDBCol md={6}>
                        <MyImagePicker  
                                        readOnly        ={readOnly} 
                                        error           ={error} 
                                        component       ={component} 
                                        item            ={new InputField(nm,null, "imagepicker")}
                                        onDelete        ={()=>{this.handleDeleteBtn(index)}}/>
                    </MDBCol>
                );
            })
        }

        return  <React.Fragment>
                    <MDBRow key={key}>
                        {imagePickerList}
                    </MDBRow>

                    {this.renderAddButton()}
                </React.Fragment>
    }

    handleDeleteBtn = (i)=>{
        const {component, name} = this.props;
        let list = StateUtil.get(component.state, name);
        list = list.filter((item, index)=>index!==i);
        //console.log(component.state);
        //console.log(i);
        StateUtil.handleFieldChange(this, list);
        //console.log(list);
        //console.log(component.state);

        this.setState({});
    }

    handleAddBtn = ()=>{
        const {component, name, parent} = this.props;
        let list = StateUtil.get(component.state, name);
        if(list===null){
            list=[];
        }
        const newItem = {mediafile:""};
        //console.log(component.state);
        newItem[parent] = {id: StateUtil.get(component.state, "target.id")};
        //console.log(newItem);
        list.push(newItem);
        StateUtil.handleFieldChange(this, list);
        this.setState({});
    }
    renderAddButton = ()=>{
        return (
            <MDBBtn onClick={()=>{this.handleAddBtn()}}>Əlavə Et</MDBBtn>
        )
    }
}
