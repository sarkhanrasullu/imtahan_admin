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
            new InputField("target.classNo","Sinif"             ),
            new InputField("target.price","Qiymət"            ),
        ]
    },
    {
        items:[
            new SelectBox ("teacherId.id","Müəllim","/teachers","id","name"),
            new SelectBox ("courseId.id","Kurs","/courses","id","name"),
            new SelectBox ("userId.id","Müştəri","/api/users","id","name"),
        ]
    },
    {
        items:[
            new SelectBox ("lessonId.id","Dərs","/lessons","id","name"),
            new SelectBox ("sectorId.id","Sektor","/sectors","id","name"),
        ]
    },
    {
        items:[
            new SelectBox ("cityId.id","Dərs","/lessons","id","nameAz"),
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
                    endpoint_select="/api/announcements?projection=announcementProjection"
                    formFields={rows}
                />
        )
    }
}