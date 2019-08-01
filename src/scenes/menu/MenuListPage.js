import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField, TableColumnType, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name","Adı"),
    new TableColumn("url"),
    new TableColumn("layoutTypeId.name","Səhifədə yeri"),
    new TableColumn("iframe"),
    new TableColumn("disabled","Q/aktiv"),
    new TableColumn("orderNo","Sıra yeri"),

    new TableColumn("insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
    new TableColumn("insertDate", "Daxil edilmə tarixi", TableColumnType.DATE_TIME),
    new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];

const rows = [
    {
        items:[
            new InputField("target.id", "Id"),
            new InputField("target.name","Adı"),
        
            new InputField("target.insertDate", "Daxil edilmə tarixi", InputFieldType.DATE_TIME),
            new InputField("target.lastChangeDate", "Son dəyişilmə tarixi", InputFieldType.DATE_TIME),
            new SelectBox("target.insertUserId.id", "Daxil edən şəxs", "/api/users", "id", "name"),
        ]
    }

];

export default class MenuListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                endpoint_select="/api/menus?projection=idNameProjection"
                endpoint_delete="/api/menus"
                endpoint_add_or_save="/api/menus"
                    searchFields={rows}
                    tableProps= {
                        {
                            columns: columns
                        }
                    }/>
        )
    }
}
