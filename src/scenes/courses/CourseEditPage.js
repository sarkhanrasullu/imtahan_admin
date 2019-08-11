import React, { Component } from 'react'
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    
    {
        items:[
            new InputField("target.name","Ad"),
        ]
    },
    {
        items:[
            new InputField("target.email","Email"),
            new InputField("target.phone","Nömrə"),
        ]
    },
    {
        items:[
            new InputField("target.facebook"),
            new InputField("target.instagram"),
        ]
    },
    {
        items:[
            new InputField("target.youtube"),
            new InputField("target.website","Website"),
        ]
    },
    
    {
        items:[
            new SelectBox ("target.userId.id","Müştəri","/api/users","id","name"),
            new SelectBox ("target.cityId.id","Şəhər","/api/cities","id","name"),
        ]
    },
    {
        items:[
            new InputField("target.address","Adress"),
        ]
    },
    {
        items:[
            new InputField("target.thumbnail","Şəkil", InputFieldType.IMAGE_BASE64),
            null
        ]
    },
    {
        items:[
            new InputField("target.description","Ətraflı", InputFieldType.TEXT_AREA),
        ]
    },
    {
        items:[
            new InputField("target.enabled","Aktiv", InputFieldType.CHECK_BOX),
        ]
    },
];

export default class CourseEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/courses/{id}?projection=courseProjection"
                    endpoint_add_or_save="/api/courses"
                    formFields={rows}
                />
        )
    }
}