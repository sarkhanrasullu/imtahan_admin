import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("url"),
    new TableColumn("iframe")
];

const fields = [
    new InputField("id"),
    new InputField("name")
];

export default class MenuListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="menus"
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
