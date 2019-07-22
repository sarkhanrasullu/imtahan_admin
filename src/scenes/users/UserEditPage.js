import React, { Component } from 'react'
import { InputField, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new InputField("name", "Ad"),
    new InputField("surname", "Soyad"),
    new InputField("email"),
    new InputField("phone", "Nömrə"),
    new InputField("password", "Parol","text",null,true),
    new SelectBox("roleId.id", "role",false,"/userRoles","id","name"),
    new InputField("thumbnail", "Şəkil", "imagepicker"),
];

class UserEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="admin/users"
                    select_endpoint="/users"
                    projection="userProjection"
                    callback_url="/users"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default UserEditPage
