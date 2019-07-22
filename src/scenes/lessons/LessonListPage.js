import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("nameAz", "name az"),
    new TableColumn("nameRu", "name ru"),
];

const fields = [
    new InputField("nameAz", "name az"),
    new InputField("nameRu", "name ru"),
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
