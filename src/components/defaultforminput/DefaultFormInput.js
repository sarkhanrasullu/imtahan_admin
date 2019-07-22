import React, { Component } from 'react'
import StateUtil from '../../utils/StateUtil';
import {MDBInput} from 'mdbreact'

const style = {
    errorInput: {borderColor:"red", borderWidth:1}
  };

export default class DefaultFormInput extends Component {
    render(){
        const {item, error, readOnly, component, key } = this.props;
        
        const {label, type, name} = item;
        let currentValue = StateUtil.get(component.state, name);
        currentValue = currentValue?currentValue+"":null;
  
        let result = <MDBInput  
                              key={key}
                              type={type?type:"text"}
                              rows={10}
                              disabled={readOnly}  
                              placeholder={label} 
                              value={currentValue} 
                              style={error ? style.errorInput:style.defaultInput} 
                              getValue={(val)=>{ 
                                StateUtil.handleFieldChange(this, val, item.name);
                              }
                      }/>;
  
        return result;
      }
}
