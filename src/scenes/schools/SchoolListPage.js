import React, { Component } from 'react';
import { InputField, TableColumn } from '../../components/datatable/DataTableTypes';
import EntityListPage from '../../components/entitylistpage/EntityListPage';

const columns = [
    new TableColumn("id"),
    new TableColumn("name", "Adı"),
];

const rows = [
    {
        items:[
            new InputField("target.name", "Adı"),
        ]
    }
];

export default class SchoolListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint_select="/api/schools?projection=idNameProjection"
                    endpoint_delete="/api/schools"
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
