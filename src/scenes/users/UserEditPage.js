import React, { Component } from 'react'
import { InputField, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items: [
            new InputField("target.name", "Ad"),
            new InputField("target.surname", "Soyad"),
        ]
    },
    {
        items: [
            new InputField("target.age", "Yaş"),
            new InputField("target.balance", "Balans"),
        ]
    },
    {
        items: [
            new InputField("target.email"),
            new InputField("target.password", "Parol",InputFieldType.PASSWORD),
        ]
    },
    {
        items: [
            new InputField("target.phone", "Nömrə"),
            new InputField("target.address", "Address"),
        ]
    },
    {
        items: [
            new SelectBox("target.cityId.id", "Şəhər","/api/cities","id","name"),
            new SelectBox("target.roleId.id", "Pozisiya","/api/userRoles","id","name"),
        ]
    },
    {
        items: [
            new InputField("target.approved", "Email Təsdiqlənib", InputFieldType.CHECK_BOX),
            new InputField("target.enabled", "Aktiv", InputFieldType.CHECK_BOX),
        ]
    },
    {
        items: [
            new InputField("target.thumbnail", "Şəkil", InputFieldType.IMAGE_PICKER_BASE64),
            null,
        ]
    },
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
