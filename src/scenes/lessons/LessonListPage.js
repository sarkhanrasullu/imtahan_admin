import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField, TableColumnType, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name", "Adı"),

    new TableColumn("insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
    new TableColumn("insertDate", "Daxil edilmə vaxtı", TableColumnType.DATE_TIME),
    new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];

const fields = [
    new InputField("name", "Adı"),

    new SelectBox("insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
    new InputField("insertDate", "Daxil edilmə vaxtı", InputFieldType.DATE_TIME),
    new InputField("lastChangeDate", "Son dəyişilmə tarixi", InputFieldType.DATE_TIME),
];

export default class LessonListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="lessons"
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
