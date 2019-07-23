import React, { Component } from 'react'
import { InputField, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    new InputField("title"          , "Elanın başlığı"),
    new SelectBox ("lessonId.id"    , "Dərs"    ,  "/lessons"   , "id", "name"      ),
    new SelectBox ("sectorId.id"    , "Sektor"  , "/sectors"    , "id", "name"      ),
    new SelectBox ("cityId.id"      , "Dərs"    ,  "/lessons"   , "id", "nameAz"    ),
    new InputField("classNo"        , "Sinif"                                       ),
    new InputField("price"          , "Qiymət"                                      ),
    new InputField("thumbnail"      , "Şəkil"                                       ),
    new InputField("description"    , "Ətraflı"                                     ),
    new InputField("endDate"        , "Elanın bitmə tarixi"                         ),
    new InputField("enabled"         , "Aktiv"   ,  InputFieldType.CHECK_BOX         ),
    new SelectBox ("teacherId.id"   , "Müəllim" ,  "/teachers"  , "id", "name"      ),
    new SelectBox ("courseId.id"    , "Kurs"    ,  "/courses"   , "id", "name"      ),
    new SelectBox ("userId.id"      , "Müştəri" ,  "/users"     , "id", "name"      ),
];

export default class AnnouncementEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/announcements"
                    select_endpoint="/announcements"
                    projection="announcementProjection"
                    callback_url="/announcements"
                    formFields={formFields}
                />
        )
    }
}