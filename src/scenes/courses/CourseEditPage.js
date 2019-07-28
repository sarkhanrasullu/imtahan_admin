import React, { Component } from 'react'
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    
    {
        items:[
            new InputField("name","Ad"),
        ]
    },
    {
        items:[
            new InputField("email","Email"),
            new InputField("phone","Nömrə"),
        ]
    },
    {
        items:[
            new InputField("facebook"),
            new InputField("instagram"),
        ]
    },
    {
        items:[
            new InputField("youtube"),
            new InputField("website","Website"),
        ]
    },
    
    {
        items:[
            new SelectBox ("userId.id","Müştəri","/users","id","name"),
            new SelectBox ("cityId.id","Şəhər","/cities","id","name"),
        ]
    },
    {
        items:[
            new InputField("address","Adress"),
        ]
    },
    {
        items:[
            new InputField("thumbnail","Şəkil", InputFieldType.IMAGE_PICKER),
            null
        ]
    },
    {
        items:[
            new InputField("description","Ətraflı", InputFieldType.TEXT_AREA),
        ]
    },
    {
        items:[
            new InputField("enabled","Aktiv", InputFieldType.CHECK_BOX),
        ]
    },
];

export default class CourseEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/courses?projection=courseProjection"
                    endpoint_add_or_save="/api/courses"
                    formFields={rows}
                />
        )
    }
}