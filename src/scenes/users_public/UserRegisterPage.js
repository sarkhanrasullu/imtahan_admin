import React, { Component } from 'react';
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';


const formFields = [
    {
        items: [
            new InputField("target.name", "Ad"),
        ]
    },
    {
        items: [
            new InputField("target.surname", "Soyad"),
        ]
    },
    {
        items: [
            new InputField("target.fatherName", "Ata adı"),
        ]
    },
    {
        items: [
            new SelectBox("target.genderId.id", "Cinsiniz",null,"id","name",false, [
                {
                    id:"1", name:"Kişi"
                },
                {
                    id:"2", name:"Qadın"
                }
            ]),
        ]
    },
    {
        items: [
            new InputField("target.email", "E-mail"),
        ]
    },
    {
        items: [
            new InputField("target.password", "Şifrə", InputFieldType.PASSWORD),
        ]
    },
    {
        items: [
            new InputField("target.phone", "Mobil telefon"),
        ]
    },
    {
        items: [
            new SelectBox("target.status", "Status", null, "id", "name", false, [
                {
                    id:"1", name:"Şagird"
                },
                {
                    id:"2", name:"Müəllim"
                },
                {
                    id:"3", name:"Abituriyent"
                },
                {
                    id:"4", name:"Magistr"
                },
                {
                    id:"5", name:"YÖS"
                },
                {
                    id:"6", name:"Dövlət qulluğu"
                },
                {
                    id:"7", name:"Məntiq, informatika"
                },
                {
                    id:"8", name:"Xarici dillər"
                },
                {
                    id:"9", name:"Digər"
                }
            ],
            (val, component)=>{
                if(val==="1"){
                    component.state.target["target.schoolId.id_notvisible"] = false;
                }else{
                    component.state.target["target.schoolId.id_notvisible"] = true;
                }
                component.setState({});
            }),
        ]
    },
    {
        items: [
            new SelectBox("target.schoolId.id", "Oxuduğunuz məktəb","/api/schools?projection=idNameProjection","id","name"),
        ]
    },
    
    {
        items: [
            new SelectBox("target.cityId.id", "Yaşadığınız yer","/api/cities?projection=idNameProjection","id","name"),
        ]
    },
    
];

class UserRegisterPage extends Component {
    state = {
        target:{
            "target.schoolId.id_notvisible":true
        }
    }
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/users/{id}?projection=userProjection"
                    endpoint_add_or_save="/api/admin/users"
                    endpoint_delete="/api/users"
                    formFields={formFields}
                    defaultTarget={this.state.target}
                    btnLabel="Qeydiyyat"
                />
        )
    }
}

export default UserRegisterPage
