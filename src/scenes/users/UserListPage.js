import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name", "Ad"),
    new TableColumn("surname","Soyad"),
    new TableColumn("age","Yaş"),
    new TableColumn("email", "Email"),
    new TableColumn("phone","Nömrə"),
    new TableColumn("thumbnail","Şəkil", "image"),
    new TableColumn("cityId.name","Şəhər"),
    new TableColumn("address","Address"),
    new TableColumn("roleId.name","Role"),
    new TableColumn("disabled","Q/ativ"),
    new TableColumn("lastchangedate","Son dəyişiklik tarixi")
];

const fields = [
    new InputField("name", "Ad"),
    new InputField("surname","Soyad"),
    new InputField("email", "Email"),
    new InputField("phone","Nömrə"),
];

export default class UserListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="users"
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
