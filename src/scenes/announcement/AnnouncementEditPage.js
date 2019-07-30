import React,{ Component } from 'react'
import { InputField,SelectBox,InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("target.title","Elanın başlığı"),
        ]
    },
    {
        items:[
            new InputField("target.classNo","Sinif"),
            new InputField("target.price","Qiymət"),
        ]
    },
    {
        items:[
            new SelectBox ("target.teacherId.id","Müəllim","/api/teachers","id","name"),
            new SelectBox ("target.courseId.id","Kurs","/api/courses","id","name"),
            new SelectBox ("target.userId.id","Müştəri","/api/users","id","name"),
        ]
    },
    {
        items:[
            new SelectBox ("target.lessonId.id","Dərs","/api/lessons","id","name"),
            new SelectBox ("target.sectorId.id","Sektor","/api/sectors","id","name"),
        ]
    },
    {
        items:[
            new SelectBox ("target.cityId.id","Şəhər","/api/cities","id","name"),
            new InputField("target.endDate","Elanın bitmə tarixi", InputFieldType.DATE),
        ]
    },
    {
        items:[
            new InputField("target.thumbnail","Şəkil",InputFieldType.IMAGE_PICKER),
            null
        ]
    },
    {
        items:[
            new InputField("target.description","Ətraflı",InputFieldType.TEXT_AREA),
        ]
    },
    {
        items:[
            new InputField("target.enabled","Aktiv",InputFieldType.CHECK_BOX),
        ]
    }
];

export default class AnnouncementEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_add_or_save="/api/announcements"
                    endpoint_select="/api/announcements/{id}?projection=announcementProjection"
                    formFields={rows}
                />
        )
    }
}