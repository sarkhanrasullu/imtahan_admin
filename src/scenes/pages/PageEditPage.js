import React, { Component } from 'react'
import { InputField, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items:[
            new InputField("name", "Ad"),
        ]
    },
    {
        items:[
            new InputField("enabled", "Aktiv", InputFieldType.CHECK_BOX),
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