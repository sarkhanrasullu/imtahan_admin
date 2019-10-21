import React, { Component } from 'react';
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("target.title","Elanın başlığı"),
        ]
    },
    {
        items:[
            new SelectBox("target.categoryId.id","Kateqoriya seçin", '','id','name'),
        ]
    },
    {
        items:[
            new SelectBox ("target.sectorId.id","Sektoru seçin","/api/sectors","id","name"),
        ]
    },
    {
        items:[
            new SelectBox ("target.lessonId.id","Hansı dərsi tədris edirsiniz","/api/lessons","id","name"),
        ]
    },
    {
        items:[
            new SelectBox("target.endDate","Elanın müddəti", '','id','name'),
        ]
    },
    {
        items:[
            new InputField("target.thumbnail","Şəkil yükləyin",InputFieldType.IMAGE_BASE64),
            null
        ]
    },
    {
        items:[
            new InputField("target.description","Elan haqqında ətraflı məlumat daxil edin",InputFieldType.TEXT_AREA),
        ]
    }
];

export default class AnnouncementEditPagePublic extends Component {
    render() {
        return (
                <EntityEditPage
                    notVisible
                    endpoint_add_or_save="/api/announcements"
                    endpoint_select="/api/announcements/{id}?projection=announcementProjection"
                    formFields={rows}
                /> 
        )
    }
}