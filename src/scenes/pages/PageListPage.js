import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField, TableColumnType, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name","Ad"),
    new TableColumn("enabled","Aktiv"),

    new TableColumn("insertUserId.name", "Daxil edən şəxs", "/users", "id", "name"),
    new TableColumn("insertDate", "Daxil edilmə vaxtı", TableColumnType.DATE_TIME),
    new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];

const rows = [
    {
        items:[
            new InputField("target.name","Ad"),
            new InputField("target.insertDate", "Daxil edilmə vaxtı", InputFieldType.DATE_TIME),
            new InputField("target.lastChangeDate", "Son dəyişilmə tarixi", InputFieldType.DATE_TIME),
            new SelectBox("target.insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
            new InputField("target.enabled","Aktiv", InputFieldType.CHECK_BOX),
        ]
    }
];

export default class PageListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                endpoint_select="/api/pages?projection=idNameProjection"
                endpoint_delete="/api/pages"
                endpoint_add_or_save="/api/pages"
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
