import React, { Component } from 'react'
import { InputField, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items:[
            new InputField("target.name", "Ad"),
        ]
    },
    {
        items:[
            new InputField("target.enabled", "Aktiv", InputFieldType.CHECK_BOX),
        ]
    }
];

export default class PageEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/pages?projection=pageProjection"
                    endpoint_add_or_save="/api/pages"
                    callback_url="/pages"
                    formFields={formFields}
                />
        )
    }
}