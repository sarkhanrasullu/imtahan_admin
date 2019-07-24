import React,{ Component } from 'react'
import { InputField,SelectBox,InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("title","Elanın başlığı"),
        ]
    },
    {
        items:[
            new InputField("classNo","Sinif"             ),
            new InputField("price","Qiymət"            ),
        ]
    },
    {
        items:[
            new SelectBox ("teacherId.id","Müəllim","/teachers","id","name"),
            new SelectBox ("courseId.id","Kurs","/courses","id","name"),
            new SelectBox ("userId.id","Müştəri","/users","id","name"),
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
            new InputField("endDate","Elanın bitmə tarixi"),
        ]
    },
    {
        items:[
            new InputField("thumbnail","Şəkil",InputFieldType.IMAGE_PICKER),
            null
        ]
    },
    {
        items:[
            new InputField("description","Ətraflı",InputFieldType.TEXT_AREA),
        ]
    },
    {
        items:[
            new InputField("enabled","Aktiv",InputFieldType.CHECK_BOX),
        ]
    }
];

export default class AnnouncementEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/announcements"
                    select_endpoint="/announcements?projection=announcementProjection"
                    callback_url="/announcements"
                    formFields={rows}
                />
        )
    }
}