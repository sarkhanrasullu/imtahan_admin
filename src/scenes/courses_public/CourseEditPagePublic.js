import React, { Component } from 'react';
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
            new InputField("target.facebook", "Facebook"),
            new InputField("target.instagram", "Instagram"),
        ]
    },
    {
        items:[
            new InputField("target.youtube", "YouTube"),
            new InputField("target.website", "Website"),
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
    }
];

export default class CourseEditPagePublic extends Component {
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