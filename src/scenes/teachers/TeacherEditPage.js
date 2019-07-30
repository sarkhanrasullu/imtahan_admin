import React, { Component } from 'react'
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items:[
            new InputField("target.name","Ad"),
            new InputField("target.surname","Soyad"),
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
            new InputField("target.address","Adress"),
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
            new InputField("target.thumbnail","Şəkil", InputFieldType.IMAGE_PICKER),
            null
        ]
    },
    {
        items:[
            new SelectBox("target.target.cityId.id","Şəhər","/api/cities","id","name"),
            new SelectBox("target.target.userId.id","Istifadəçi","/api/users","id","name"),
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
            null
        ]
    },
    

    ];

export default class TeacherEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/teachers/{id}?projection=teacherProjection"
                    endpoint_add_or_save="/api/teachers"
                    formFields={formFields}
                />
        )
    }
}