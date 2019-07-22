import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField, SelectBox } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("nameAz", "Elanın adı, Az"),
    new TableColumn("nameRu", "Elanın adı, Rus"),
    new TableColumn("classNo", "Sinif"),
    new TableColumn("price", "Qiymət"),
    new TableColumn("thumbnail", "Şəkil"),
    new TableColumn("lessonId.nameAz", "Dərs"),
    new TableColumn("sectorId.name", "Sektor")
];

const fields = [
    new InputField("nameAz", "Elanın adı, Az"),
    new InputField("nameRu", "Elanın adı, Rus"),
    new InputField("classNo", "Sinif"),
    new InputField("price", "Qiymət"),
    new SelectBox("lessonId.id", "Dərs", "/lessons", "id", "nameAz", false),
    new SelectBox("sectorId.id", "Sektor",  "/sectors", "id", "name", false),
];

export default class AnnouncementListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint="announcements"
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
