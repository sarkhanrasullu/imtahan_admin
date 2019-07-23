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
                    save_endpoint   ="/pages"
                    select_endpoint ="/pages?projection=pageProjection"
                    callback_url    ="/pages"
                    formFields  ={formFields}
                />
        )
    }
}