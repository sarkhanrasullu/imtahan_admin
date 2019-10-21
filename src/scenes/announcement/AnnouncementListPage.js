import React, { Component } from 'react';
import { TableColumn, TableColumnType } from '../../components/datatable/DataTableTypes';
import EntityListPage from '../../components/entitylistpage/EntityListPage';

const columns = [
    new TableColumn("id"),
    new TableColumn("title", "Elanın başlığı"),
    new TableColumn("thumbnail", "Şəkil", TableColumnType.IMAGE_BASE64),
    new TableColumn("lessonId.name", "Dərs"),
    new TableColumn("sectorId.name", "Sektor"),
    new TableColumn("teacherId.name", "Müəllimin adı"),
    new TableColumn("courseId.name", "Kursun adı"),
    new TableColumn("userId.name", "Müştərinin adı"),
    new TableColumn("enabled", "Aktiv"),

    new TableColumn("insertUserId.name", "Daxil edən şəxs"),
    new TableColumn("insertDate","Daxil edilmə tarixi", TableColumnType.DATE_TIME),
    new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];


export default class AnnouncementListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    readOnly
                    endpoint_select="/api/announcements?projection=announcementProjection"
                    endpoint_delete="/api/announcements"
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}
