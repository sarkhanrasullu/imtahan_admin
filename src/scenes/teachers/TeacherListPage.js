import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField, TableColumnType, InputFieldType } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name", "Ad"),
    new TableColumn("surname","Soyad"),
    new TableColumn("email","Email"),
    new TableColumn("phone","Nömrə"),
    new TableColumn("facebook"),
    new TableColumn("instagram"),
    new TableColumn("youtube"),
    new TableColumn("thumbnail","Şəkil", TableColumnType.IMAGE),
    new TableColumn("cityId.name","Şəhər"),
    new TableColumn("address","Adress"),
    new TableColumn("website","Website"),
    new TableColumn("userId.name","Qeydiyyat edən şəxs"),
    new TableColumn("lastchangedate","Son dəyişiklik tarixi", TableColumnType.DATE)
];

const fields = [
    new InputField("name","Ad"),
    new InputField("surname","Soyad"),
    new InputField("email"),
    new InputField("phone"),
    new InputField("cityId.name","Şəhər"),
    new InputField("userId.name","Qeydiyyat edən şəxs"),
];

export default class TeacherListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="teachers"
                    searchDataFields={fields}
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}
