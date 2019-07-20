import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("nameAz"),
    new TableColumn("nameRu"),
    new TableColumn("classNo"),
    new TableColumn("price"),
    new TableColumn("thumbnail"),
    new TableColumn("description"),
    new TableColumn("lessonId.nameAz"),
    new TableColumn("sectorId.name")
];

export default class AnnouncementEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/announcements"
                    projection="announcementProjection"
                    callback_url="/announcements"
                    formDataFields={formDataFields}
                />
        )
    }
}