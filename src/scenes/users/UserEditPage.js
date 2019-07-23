import React, { Component } from 'react'
import { InputField, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items: [
            new InputField("name", "Ad"),
            new InputField("surname", "Soyad"),
        ]
    },
    {
        items: [
            new InputField("age", "Yaş"),
            new InputField("balance", "Balans"),
        ]
    },
    {
        items: [
            new InputField("email"),
            new InputField("password", "Parol",InputFieldType.PASSWORD),
        ]
    },
    {
        items: [
            new InputField("phone", "Nömrə"),
            new InputField("address", "Address"),
        ]
    },
    {
        items: [
            new SelectBox ("cityId.id", "Şəhər","/cities","id","name"),
            new SelectBox ("roleId.id", "Pozisiya","/userRoles","id","name"),
        ]
    },
    {
        items: [
            new InputField("approved", "Email Təsdiqlənib", InputFieldType.CHECK_BOX),
            new InputField("enabled", "Aktiv", InputFieldType.CHECK_BOX),
        ]
    },
    {
        items: [
            new InputField("thumbnail", "Şəkil", InputFieldType.IMAGE_PICKER),
            null,
        ]
    },
];

class UserEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint   ="admin/users"
                    select_endpoint ="/users?projection=userProjection"
                    callback_url    ="/users"
                    formFields  ={formFields}
                />
        )
    }
}

export default UserEditPage
