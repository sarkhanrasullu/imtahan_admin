import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("pageBody")
];

export default class PageListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="pages"
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
