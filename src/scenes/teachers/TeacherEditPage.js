import React, { Component } from 'react'
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items:[
            new InputField("name","Ad"),
            new InputField("surname","Soyad"),
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
            new InputField("address","Adress"),
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
            new InputField("thumbnail","Şəkil", InputFieldType.IMAGE_PICKER),
            null
        ]
    },
    {
        items:[
            new SelectBox("cityId.id","Şəhər","/cities","id","name"),
            new SelectBox("userId.id","Istifadəçi","/users","id","name"),
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
            null
        ]
    },
    

    ];

export default class TeacherEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/teachers"
                    select_endpoint="/teachers?projection=teacherProjection"
                    callback_url="/teachers"
                    formFields={formFields}
                />
        )
    }
}