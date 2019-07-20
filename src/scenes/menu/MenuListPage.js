import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("url"),
    new TableColumn("iframe")
];

export default class MenuListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="menus"
                    searchDataFields={columns}
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}
