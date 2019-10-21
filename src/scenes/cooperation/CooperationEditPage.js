import React, { Component } from 'react';
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';


const rows = [
    {
        items:[
            new InputField("target.description","Məlumat yazmaq üçün yer", InputFieldType.TEXT_AREA),
        ]
    },
    {
        items:[
            new InputField("target.fullname","Adınız, Soyadınız"),
        ]
    },
    {
        items:[
            new InputField("target.phone","Telefon nömrəsi"),
        ]
    },
    {
        items:[
            new InputField("target.address","Yaşayış ünvanı"),
        ]
    },
    {
        items:[
            new InputField("target.workEducationPlace","İşlədiyiniz təhsil müəssisəsi"),
        ]
    },
    {
        items:[
            new InputField("target.subject","Fənn"),
        ]
    },
    {
        items:[
            new InputField("target.email","E-mail"),
        ]
    },
    {
        items:[
            new InputField("target.experienceYear","Təcrübə ili"),
        ]
    },
    {
        items:[
            new SelectBox("target.knowCurriculum","Kurikulumu necə bilirsiniz", '/powerlevel','id','name'),
        ]
    },
    {
        items:[
            new InputField("target.experienceTest","Test və açıq suallar hazırlamaq bacarığı"),
        ]
    },
    {
        items:[
            new InputField("target.cooperationField","Nədə əməkdaşlıq etmək istəyirsiniz"),
        ]
    },
];
export default class CooperationEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    notVisible={this.props.notVisible}
                    endpoint_select="/api/courses/{id}?projection=courseProjection"
                    endpoint_add_or_save="/api/courses"
                    formFields={rows}
                    btnLabel={"Göndər"}
                />
        )
    }
}