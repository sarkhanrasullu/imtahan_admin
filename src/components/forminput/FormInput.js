import React, { Component } from 'react'
import MyImagePicker from '../myimagepicker/MyImagePicker';
import DefaultFormInput from '../defaultforminput/DefaultFormInput';
import ItemPicker from '../ItemPicker';
import { InputFieldType } from '../datatable/DataTableTypes';
import DNDatePicker from '../datepicker/DNDatePicker';

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
                <div key={key} >
                  {label?<div  style={error ? style.errorInput:style.defaultInput} >{label+(optional?"":" (*)")} </div>:null}
                  <div>
                    {inputComponent}
                  </div>
                </div>
        return result;        
    }

    getInputComponent = ()=>{
      
      const {item, error, readOnly, key, customComponent } = this.props;
      const type = item.type;         

      let result =[];

      const {component} = this.props;
      if(type === InputFieldType.IMAGE_PICKER || type === InputFieldType.IMAGE_PICKER_BASE64){
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
      } else if(type === InputFieldType.DATE || type === InputFieldType.DATE_TIME){
        result.push(<DNDatePicker     item={item} key={key} readOnly={readOnly} error={error} component={component}/>);
      } else {
        result.push(<DefaultFormInput item={item} key={key} readOnly={readOnly} error={error} component={component}/>);
      } 

      return result;
    }
    
}


    
