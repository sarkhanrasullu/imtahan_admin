import React, { Component } from 'react';
import { InputField, InputFieldType, SelectBox, TableColumn, TableColumnType } from '../../components/datatable/DataTableTypes';
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

const rows = [
    {
        items:[
            new InputField("target.name", "Elanın başlığı"),
            new InputField("target.classNo", "Sinif"),
            new InputField("target.price", "Qiymət"),
        ]
    },
    {
        items:[
            new SelectBox ("target.lessonId.id", "Dərs", "/api/lessons", "id", "name"),
            new SelectBox ("target.sectorId.id", "Sektor", "/api/sectors", "id", "name"),
            new SelectBox ("target.insertUserId.id", "Daxil edən şəxs", "/api/users", "id", "name"),
            new InputField("target.insertDate", "Daxil edilmə tarixi", InputFieldType.DATE_TIME),
            new InputField("target.lastChangeDate", "Son dəyişilmə tarixi", InputFieldType.DATE_TIME),
        ]
    }
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
