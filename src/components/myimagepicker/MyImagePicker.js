import React, { Component } from 'react'
import StateUtil from '../../utils/StateUtil';
import { InputFieldType } from '../datatable/DataTableTypes';
import FormInput from '../forminput/FormInput';
import ImageUploader from '../react-image-upload-component';

export default class MyImagePicker extends Component {

    onDrop = (pictures) => {
        console.log(pictures);
        const name = this.props.item.name;

        if (pictures && pictures.length>0) {

            var reader = new FileReader();
            reader.readAsDataURL(pictures[0]);
            const this_ = this;
            reader.onload = function (evt) {
                // const base64 = evt.target['result'];
                const baseb4Raw = evt.target['result'].split("base64,")[1];
                StateUtil.handleFieldChange(this_, baseb4Raw, name);
            }
            reader.onerror = function (evt) {
              //console.log(evt);
            }
          }else{
              console.log("reset pictures");
            StateUtil.handleFieldChange(this, "", name);
          }
       
    }

    render() {
          
        const {item, error, readOnly, component, key } = this.props;
        const {type, name} = item;
        const value = StateUtil.get(component.state, name);
        let result = value;
        if(type === InputFieldType.IMAGE_BASE64){
            result = "data:;base64,"+value;
        }

        const inputItem = {...item};
        inputItem.type = InputFieldType.TEXT;

        return (
                <React.Fragment key={key}>
                    <ImageUploader
                            fileContainerStyle={{
                                backgroundImage:`url(${result})`, 
                                backgroundSize: 'cover',
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }}
                            labelStyles={
                                {
                                    backgroundColor:"#0005",
                                    color:"#fff",
                                    fontSize:"13px",
                                    textAlign: "center"
                                }
                            }
                            singleImage={true}
                            withPreview={true}
                            withIcon={false}
                            buttonText='Şəkil seçin'
                            onChange={this.onDrop}
                            imgExtension={['.jpg','.jpeg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                    {
                        type === InputFieldType.IMAGE_URL?(
                            <FormInput item={inputItem} key={2} readOnly={readOnly} error={error} component={component}/>
                        ):null
                    }
                    
                </React.Fragment>
        );
    }
 
}
