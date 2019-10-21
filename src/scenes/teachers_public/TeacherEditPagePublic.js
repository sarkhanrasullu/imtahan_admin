import React, { Component } from 'react';
import { InputField, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';
import LoginFirst from '../../components/loginfirst/LoginFirst';
import LoginService from '../../services/LoginService';

const formFields = [
    {
        items:[
            new InputField("target.name","Ad"),
        ]
    },
    {
        items:[
            new InputField("target.surname","Soyad"),
        ]
    },
    {
        items:[
            new InputField("target.address","Ünvan"),
        ]
    },
    {
        items:[
            new InputField("target.speciality","İxtisas (məs. Coğrafiya)"),
        ]
    },
    {
        items:[
            new InputField("target.phone","Mobil"),
        ]
    },
    {
        items:[
            new InputField("target.email","E-mail"),
        ]
    },
    {
        items:[
            new InputField("target.facebook", "Facebook hesabı"),
        ]
    },
    {
        items:[
            new InputField("target.instagram", "Instagram hesabı"),
        ]
    },
    {
        items:[
            new InputField("target.website", "Veb sayt"),
        ]
    },
    {
        items:[
            new InputField("target.youtube", "YouTube keçid"),
        ]
    },
    {
        items:[
            new InputField("target.description", "Fəaliyyət barədə məlumat", InputFieldType.TEXT_AREA),
        ]
    },
    {
        items:[
            new InputField("target.thumbnail", "Profil şəkli yüklə", InputFieldType.IMAGE_BASE64),
            null
        ]
    },
    // {
    //     items:[
    //         // new SelectBox("target.cityId.id","Şəhər","/api/cities","id","name"),
    //         // new SelectBox("target.userId.id","Istifadəçi","/api/users","id","name"),
    //     ]
    // },

];

    
export default class TeacherEditPagePublic extends Component {
    service = new LoginService(this);
    render() {
        const loggedInUser = this.service.getLoggedInUser();
        if(!loggedInUser){
            return (
                <LoginFirst redirectUrl="/teacherprofile/create"/>
            );
        }
        return (
                <EntityEditPage
                    endpoint_select="/api/teachers/{id}?projection=teacherProjection"
                    endpoint_add_or_save="/api/teachers"
                    formFields={formFields}
                />
        )
    }
}