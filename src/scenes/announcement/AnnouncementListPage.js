import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn, InputField, SelectBox, TableColumnType, InputFieldType } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"                                    ),
    new TableColumn("title"             , "Elanın başlığı"  ),
    new TableColumn("classNo"           , "Sinif"           ),
    new TableColumn("price"             , "Qiymət"          ),
    new TableColumn("thumbnail"         , "Şəkil"           ),
    new TableColumn("lessonId.name"     , "Dərs"            ),
    new TableColumn("sectorId.name"     , "Sektor"          ),
    new TableColumn("cityId.name"       , "Şəhər adı"       ),
    new TableColumn("teacherId.name"    , "Müəllimin adı"   ),
    new TableColumn("courseId.name"     , "Kursun adı"      ),
    new TableColumn("userId.name"       , "Müştərinin adı"  ),
    new TableColumn("enabled"            , "Aktiv"           ),

    new TableColumn("insertUserId.id", "Daxil edən şəxs"),
    new TableColumn("insertDate", "Daxil edilmə vaxtı", TableColumnType.DATE_TIME),
    new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];

const rows = [
    {
        items:[
            new InputField("target.name"           , "Elanın başlığı"                          ),
            new InputField("target.classNo"        , "Sinif"                                   ),
            new InputField("target.price"          , "Qiymət"                                  ),
        ]
    },
    {
        items:[
            new SelectBox ("target.lessonId.id"    , "Dərs"        , "/api/lessons", "id", "name"  ),
            new SelectBox ("target.sectorId.id"    , "Sektor"      , "/api/sectors", "id", "name"  ),
            new SelectBox ("target.insertUserId.id", "Daxil edən şəxs", "/api/users", "id", "name"),
            new InputField("target.insertDate", "Daxil edilmə vaxtı", InputFieldType.DATE_TIME),
            new InputField("target.lastChangeDate", "Son dəyişilmə tarixi", InputFieldType.DATE_TIME),
        ]
    }
];

export default class AnnouncementListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint_select="/api/announcements?projection=announcementProjection"
                    endpoint_delete="/api/announcements"
                
                    searchFields={rows}
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}
