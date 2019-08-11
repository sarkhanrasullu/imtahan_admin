import React, { Component } from 'react'
import MyImagePicker from '../myimagepicker/MyImagePicker';
import DefaultFormInput from '../defaultforminput/DefaultFormInput';
import ItemPicker from '../itempicker/ItemPicker';
import { InputFieldType } from '../datatable/DataTableTypes';
import DNDatePicker from '../datepicker/DNDatePicker';
import './FormInput.css';
import CheckBox from '../checkbox/CheckBox';
import Editor from '../editor';

const style = {
  errorInput: {borderColor:"red", borderWidth:1, fontSize:16, fontWeight:"bold"},
  defaultInput: {fontSize:16, fontWeight:"bold"}
};

export default class FormInput extends Component {
    state = {
        val: null
    }

    render() {
        if(!this.props.item) return null;
        const {label, optional} = this.props.item;           
        const {unwrap, error, key} = this.props;
        const inputComponent = this.getInputComponent();
        
        const result = unwrap?inputComponent:
                <React.Fragment key={key} >
                  {label?<label  style={error ? style.errorInput:style.defaultInput} >{label+(optional?"":" (*)")} </label>:null}
                  {inputComponent}
                </React.Fragment>
        return result;        
    }

    getInputComponent = ()=>{
      
      const {item, error, readOnly, key, customComponent } = this.props;
      const type = item.type;         

      let result =[];

      const {component} = this.props;
      if(type === InputFieldType.IMAGE_PICKER || type === InputFieldType.IMAGE_BASE64){
        result.push(<MyImagePicker item={item} key={key} readOnly={readOnly} error={error} component={component} type={type}/>);
      } else if(type === InputFieldType.SELECT_BOX) {
        result.push(
          <ItemPicker 
                item      ={item}
                error     ={error}
                component ={component} />
        )
      } else if(type === InputFieldType.CUSTOM){
        result.push(customComponent);
      } else if(type === InputFieldType.CHECK_BOX){
        result.push(<CheckBox item={item} key={key} readOnly={readOnly} error={error} component={component}/>);
      } else if(type === InputFieldType.DATE || type === InputFieldType.DATE_TIME){
        result.push(<DNDatePicker item={item} key={key} readOnly={readOnly} error={error} component={component}/>);
      } else if(type === InputFieldType.EDITOR){
        result.push(<Editor item={item} key={key} readOnly={readOnly} error={error} component={component}/>);
      }else {
        result.push(<DefaultFormInput item={item} key={key} readOnly={readOnly} error={error} component={component}/>);
      } 

      return result;
    }
    
}


    
