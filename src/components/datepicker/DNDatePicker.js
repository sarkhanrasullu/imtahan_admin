import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import StateUtil from '../../utils/StateUtil';
import './DNDatePicker.css';

export default class DNDatePicker extends Component {

    render(){
        const {item, component} = this.props;
            
        const {name} = item;
        let currentValue = StateUtil.get(component.state, name);
        if(typeof currentValue === "string"){
            currentValue = new Date(currentValue);
        }
        currentValue = currentValue?currentValue:null;
        let result = 
            <div className="md-form default_datepicker">
                    <DatePicker
                            selected={currentValue}
                            onChange={(val)=>{ 
                                StateUtil.handleFieldChange(this, val, item.name);
                            }}/>
            </div>
        return result;
    }
  
}
