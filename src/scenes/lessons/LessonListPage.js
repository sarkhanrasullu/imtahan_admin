import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField, TableColumnType, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name", "Adı"),

    new TableColumn("insertUserId.name", "Daxil edən şəxs"),
    new TableColumn("insertDate", "Daxil edilmə vaxtı", TableColumnType.DATE_TIME),
    new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];

const rows = [
    {
        items:[
            new InputField("target.name", "Adı"),
            new InputField("target.insertDate", "Daxil edilmə vaxtı", InputFieldType.DATE_TIME),
            new InputField("target.lastChangeDate", "Son dəyişilmə tarixi", InputFieldType.DATE_TIME),
            new SelectBox("target.insertUserId.id", "Daxil edən şəxs", "/api/users", "id", "name"),
        ]
    }
];

export default class LessonListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint_select="/api/lessons?projection=lessonProjection"
                    endpoint_delete="/api/lessons"
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
