import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("leftSide"),
    new TableColumn("rightSide"),
    new TableColumn("upSide"),
    new TableColumn("downSide"),
    new TableColumn("leftSide"),
    // new TableColumn("adPageList"),
];

export default class AdListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="ads"
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
