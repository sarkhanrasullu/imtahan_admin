import React, { Component } from 'react'
import { InputField, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
        new InputField("name"),
        new InputField("surname"),
        new InputField("email"),
        new InputField("phone"),
        new InputField("facebook"),
        new InputField("instagram"),
        new InputField("youtube"),
        new InputField("thumbnail","Şəkil", InputFieldType.IMAGE),
        new InputField("cityId.name","Şəhər"),
        new InputField("address","Adress"),
        new InputField("website","Website"),
        new InputField("userId.name","Qeydiyyat edən şəxs"),
        new InputField("description","Ətraflı"),
        new InputField("lastchangedate","Son dəyişiklik tarixi", InputFieldType.DATE)
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