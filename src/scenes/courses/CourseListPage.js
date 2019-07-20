import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("userId.email"),
];

export default class CourseListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="courses"
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
