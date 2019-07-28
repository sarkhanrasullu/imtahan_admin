import React, { Component } from 'react'
import Image from '../image/Image';
import StateUtil from '../../utils/StateUtil';
import { InputFieldType } from '../datatable/DataTableTypes';
import FormInput from '../forminput/FormInput';

export default class MyImagePicker extends Component {
    render() {
          
        const {item, error, readOnly, component, key } = this.props;
        const {type, name} = item;
        const value = StateUtil.get(component.state, name);
        let result = value;
        //console.log(result);
        if(value===null || !value || value.trim().length===0) {
            result = "/upload.svg";
        } else if(type === InputFieldType.IMAGE_PICKER_BASE64){
            result = "data:image/png;base64,"+value;
        }

        const inputItem = {...item};
        inputItem.type = InputFieldType.TEXT;

        return (
                <React.Fragment key={key}>
                    <Image image={result} onDelete={this.props.onDelete} key={1}/>
                    {
                        type === InputFieldType.IMAGE_PICKER_URL?(
                            <FormInput item={inputItem} key={2} readOnly={readOnly} error={error} component={component}/>
                        ):null
                    }
                </React.Fragment>
        );
    }
 
}
