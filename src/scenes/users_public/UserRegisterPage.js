import React, { Component } from 'react';
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items: [
            new InputField("target.thumbnail", "Şəkil", InputFieldType.IMAGE_BASE64),
            null,
        ]
    },
    {
        items: [
            new InputField("target.name", "Ad"),
            new InputField("target.surname", "Soyad"),
        ]
    },
    {
        items: [
            new InputField("target.email", "Email"),
            new InputField("target.password", "Parol",InputFieldType.PASSWORD),
        ]
    },
    {
        items: [
            new InputField("target.age", "Yaş"),
            new InputField("target.phone", "Nömrə"),
        ]
    },
    {
        items: [
            new InputField("target.address", "Address"),
        ]
    },
    {
        items: [
            new SelectBox("target.cityId.id", "Şəhər","/api/cities","id","name"),
            null
        ]
    },
    
];

class UserRegisterPage extends Component {
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

export default UserRegisterPage
