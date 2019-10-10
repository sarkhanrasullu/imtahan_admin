import React, { Component } from 'react';
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items: [
            new InputField("target.name", "ad"),
            new InputField("target.surname", "soyad"),
        ]
    },
    {
        items: [
            new InputField("target.age", "yaş"),
            new InputField("target.balance", "balans"),
        ]
    },
    {
        items: [
            new InputField("target.email", "email"),
            new InputField("target.password", "parol",InputFieldType.PASSWORD),
        ]
    },
    {
        items: [
            new InputField("target.phone", "nömrə"),
            new InputField("target.address", "address"),
        ]
    },
    {
        items: [
            new SelectBox("target.cityId.id", "şəhər","/api/cities","id","name"),
            new SelectBox("target.roleId.id", "pozisiya","/api/userRoles","id","name"),
        ]
    },
    {
        items: [
            new InputField("target.approved", "email təsdiqlənib", InputFieldType.CHECK_BOX),
            new InputField("target.enabled", "aktiv", InputFieldType.CHECK_BOX),
        ]
    },
    {
        items: [
            new InputField("target.thumbnail", "Şəkil", InputFieldType.IMAGE_BASE64),
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
