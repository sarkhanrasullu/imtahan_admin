import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("nameAz"),
    new TableColumn("nameRu"),
    new TableColumn("classNo"),
    new TableColumn("price"),
    new TableColumn("thumbnail"),
    new TableColumn("description"),
    new TableColumn("lessonId.nameAz"),
    new TableColumn("sectorId.name")
];

export default class AnnouncementListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="announcements"
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
