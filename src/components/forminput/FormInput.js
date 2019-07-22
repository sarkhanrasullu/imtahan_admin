import React, { Component } from 'react'
import NationalityPicker from '../nationalitypicker/NationalityPicker';
import MyImagePicker from '../myimagepicker/MyImagePicker';
import GenderPicker from '../genderpicker/GenderPicker';
import MapPicker from '../mappicker/MapPicker';
import DefaultFormInput from '../defaultforminput/DefaultFormInput';
import MyImagesPicker from '../myimagespicker/MyImagesPicker';
import ItemPicker from '../ItemPicker';
import { InputFieldType } from '../datatable/DataTableTypes';

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
        const {label, optional, type} = this.props.item;           
        const {unwrap, error, key} = this.props;
        if(type==="empty") return null;
        const inputComponent = this.getInputComponent();
        
        const result = unwrap?inputComponent:
                <div key={key} >
                  {label?<span  style={error ? style.errorInput:style.defaultInput} >{label+(optional?"":" (*)")} </span>:null}
                  {inputComponent}
                </div>
        return result;        
    }

    getInputComponent = ()=>{
      
      const {item, error, readOnly, key, customComponent } = this.props;
      const type = item.type;         

      let result =[];

      const {component} = this.props;
      if(type===InputFieldType.TEXT || type===InputFieldType.TEXT_AREA||type===InputFieldType.PASSWORD){
        result.push(<DefaultFormInput item={item} key={key} readOnly={readOnly} error={error} component={component}/>);
      }else if(type === InputFieldType.IMAGE_PICKER || type === InputFieldType.IMAGE_PICKER_BASE64){
        result.push(<MyImagePicker item={item} key={key} readOnly={readOnly} error={error} component={component} type={type}/>);
      }else if(type === InputFieldType.SELECT_BOX) {
        result.push(
          <ItemPicker 
                item={item}
                error={error}
                component={component} />
        )
      }
      else if(type === "custom"){
        result.push(customComponent);
      } 

      return result;
    }
    
}


    
