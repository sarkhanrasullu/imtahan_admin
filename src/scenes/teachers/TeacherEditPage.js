import React, { Component } from 'react'
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
        new InputField("name"       ,"Ad"                                                   ),
        new InputField("surname"    ,"Soyad"                                                ),
        new InputField("email"      ,"Email"                                                ),
        new InputField("phone"      ,"Nömrə"                                                ),
        new InputField("facebook"                                                           ),
        new InputField("instagram"                                                          ),
        new InputField("youtube"                                                            ),
        new InputField("thumbnail"   ,"Şəkil"        , InputFieldType.IMAGE                 ),
        new SelectBox("cityId.name"  ,"Şəhər"        ,"/cities"             ,"id","name"    ),
        new InputField("address"     ,"Adress"                                              ),
        new InputField("website"     ,"Website"                                             ),
        new InputField("userId.name" ,"Qeydiyyat edən şəxs"                                 ),
        new InputField("enabled" ,"Aktiv"                                 ),
        new InputField("description" ,"Ətraflı"                                             ),
        new SelectBox("userId.id"    ,"Istifadəçi"   ,"/users"              ,"id"   ,"name" ),

    ];

export default class TeacherEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/teachers"
                    select_endpoint="/teachers"
                    projection="teacherProjection"
                    callback_url="/teachers"
                    formDataFields={formDataFields}
                />
        )
    }
}