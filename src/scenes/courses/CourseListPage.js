import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField, TableColumnType, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name","Ad"),
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
    new TableColumn("insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
    new TableColumn("insertDate", "Daxil edilmə vaxtı", TableColumnType.DATE_TIME),
    new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];

const rows = [
    {
        items:[
            new InputField("target.name","Ad"),
            new InputField("target.email"),
            new InputField("target.phone"),
        ]
    },
    {
        items:[
            new SelectBox ("cityId.id","Şəhər","/api/cities","id","name"),
            new SelectBox ("userId.id","Müştəri","/api/users","id","name"),
            new SelectBox ("insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
            new InputField("target.insertDate", "Daxil edilmə vaxtı", InputFieldType.DATE_TIME),
            new InputField("target.lastChangeDate", "Son dəyişilmə tarixi", InputFieldType.DATE_TIME),
        ]
    }
];

export default class CourseListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                endpoint_select="/api/courses?projection=courseProjection"
                endpoint_delete="/api/courses"
                    searchFields={rows}
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}
