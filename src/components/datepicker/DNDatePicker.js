import React, { Component } from 'react'
import StateUtil from '../../utils/StateUtil';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const style = { 
    errorInput: {borderColor:"red", borderWidth:1}
  };
export default class DNDatePicker extends Component {

    render(){
        const {item, error, readOnly, component, key } = this.props;
            
        const {label, type, name} = item;
        let currentValue = StateUtil.get(component.state, name);
        currentValue = currentValue?currentValue:null;
        let result = 
            <div style={{marginTop:7}}>
                    <DatePicker
                            selected={currentValue}
                            onChange={(val)=>{ 
                                StateUtil.handleFieldChange(this, val, item.name);
                            }}/>
            </div>
        return result;
    }
  
}
