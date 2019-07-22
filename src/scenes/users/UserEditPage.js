import React, { Component } from 'react'
import { InputField, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new InputField("name"           , "Ad"                                          ),
    new InputField("surname"        , "Soyad"                                       ),
    new InputField("age"            , "Yaş"                                         ),
    new InputField("email"                                                          ),
    new InputField("password"       , "Parol"       ,InputFieldType.PASSWORD        ),
    new InputField("phone"          , "Nömrə"                                       ),
    new InputField("thumbnail"      , "Şəkil"       ,"imagepicker"                  ),
    new InputField("address"        , "Address"                                     ),
    new InputField("approved"       , "Email Təsdiqlənib"                                     ),
    new InputField("enabled"       , "Aktiv"                                     ),
    new InputField("balance"        , "Balans"                                      ),
    new SelectBox ("roleId.id"      , "Pozisiya"    ,"/userRoles"   ,"id"   ,"name" ),
    new SelectBox ("cityId.id"      , "Şəhər"       ,"/cities"      ,"id"   ,"name" ),
];

class UserEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint   ="admin/users"
                    select_endpoint ="/users"
                    projection      ="userProjection"
                    callback_url    ="/users"
                    formDataFields  ={formDataFields}
                />
        )
    }
}

export default UserEditPage
