import React, { Component } from 'react'
import { InputField, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new InputField("id"),
    new InputField("name", "Ad"),
    new InputField("email","Email"),
    new InputField("phone","Nömrə"),
    new InputField("facebook"),
    new InputField("instagram"),
    new InputField("youtube"),
    new InputField("thumbnail","Şəkil", InputFieldType.IMAGE),
    new InputField("cityId.name","Şəhər"),
    new InputField("address","Adress"),
    new InputField("website","Website"),
    new InputField("userId.name","Qeydiyyat edən şəxs"),
    new InputField("lastchangedate","Son dəyişiklik tarixi", InputFieldType.DATE)
    ];

export default class CourseEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/courses"
                    select_endpoint="/courses"
                    projection="courseProjection"
                    callback_url="/courses"
                    formDataFields={formDataFields}
                />
        )
    }
}