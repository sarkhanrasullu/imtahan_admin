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
            new SelectBox("target.genderId.id", "Cinsiniz","/genders","id","name"),
        ]
    },
    {
        items: [
            new InputField("target.email", "E-mail"),
        ]
    },
    {
        items: [
            new InputField("target.phone", "Mobil telefon"),
        ]
    },
    {
        items: [
            new SelectBox("target.status", "Status","/usersstatuses","id","name"),
        ]
    },
    {
        items: [
            new InputField("target.password", "Şifrə", InputFieldType.PASSWORD),
        ]
    },
    {
        items: [
            new SelectBox("target.cityId.id", "Yaşadığınız yer","/api/cities","id","name"),
        ]
    },
    {
        items: [
            new SelectBox("target.schoolId.id", "Oxuduğunuz məktəb","/api/cities","id","name"),
        ]
    }
];

class UserEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/users/{id}?projection=userProjection"
                    endpoint_add_or_save="/api/admin/users"
                    endpoint_delete="/api/users"
                    formFields={formFields}
                />
        )
    }
}

export default UserEditPage
