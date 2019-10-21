import React, { Component } from 'react';
import { TableColumn, TableColumnType } from '../../components/datatable/DataTableTypes';
import EntityListPage from '../../components/entitylistpage/EntityListPage';

const columns = [
    new TableColumn("id"),
    new TableColumn("title", "Elanın başlığı"),
    new TableColumn("classNo", "Sinif"),
    new TableColumn("price", "Qiymət"),
    new TableColumn("thumbnail", "Şəkil", TableColumnType.IMAGE_BASE64),
    new TableColumn("lessonId.name", "Dərs"),
    new TableColumn("sectorId.name", "Sektor"),
    new TableColumn("cityId.name", "Şəhər adı"),
    new TableColumn("teacherId.name", "Müəllimin adı"),
    new TableColumn("courseId.name", "Kursun adı"),
    new TableColumn("userId.name", "Müştərinin adı"),
    new TableColumn("enabled", "Aktiv"),

    new TableColumn("insertUserId.name", "Daxil edən şəxs"),
    new TableColumn("insertDate","Daxil edilmə tarixi", TableColumnType.DATE_TIME),
    new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];
 

export default class AnnouncementListPagePublic extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint_select="/api/announcements?projection=announcementProjection"
                    endpoint_add_or_save="/api/announcements"
                    noPagination
                    noEdit
                    noRemove
                    notVisible
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                />
        )
    }
}
