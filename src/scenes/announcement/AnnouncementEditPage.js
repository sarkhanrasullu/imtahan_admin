import React, { Component } from 'react'
import { InputField, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new InputField("nameAz", "Elanın adı, Az"),
    new InputField("nameRu", "Elanın adı, Rus"),
    new InputField("classNo", "Sinif"),
    new InputField("price", "Qiymət"),
    new InputField("thumbnail", "Şəkil"),
    new InputField("description", "Ətraflı"),
    new SelectBox("lessonId.id", "Dərs",  "/lessons", "id", "nameAz", false),
    new SelectBox("sectorId.id", "Sektor", "/sectors", "id", "name", false),
];

export default class AnnouncementEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/announcements"
                    select_endpoint="/announcements"
                    projection="announcementProjection"
                    callback_url="/announcements"
                    formDataFields={formDataFields}
                />
        )
    }
}