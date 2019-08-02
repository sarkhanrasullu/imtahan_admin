import React, { Component } from 'react'
import { InputField, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items:[
            new InputField("target.name", "Ad")
        ]
    },
    {
        items:[
            new InputField("target.enabled", "Aktiv", InputFieldType.CHECK_BOX),
        ]
    },
    {
        items:[
            new InputField("target.pageBody", "Kontent", InputFieldType.EDITOR)
        ]
    },
   
];

export default class PageEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    fullscreen={true}
                    endpoint_select="/api/pages/{id}?projection=pageProjection"
                    endpoint_add_or_save="/api/pages"
                    formFields={formFields}
                />
        )
    }
}