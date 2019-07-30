import React, { Component } from 'react'
import { InputField, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items:[
            new InputField("target.name","Adı"),
        ]
    },
    {
        items:[
            new SelectBox ("target.layoutTypeId.id","Səhifədə yeri", "/api/menuLayoutTypes",   "id","name"),
        ]
    },
    {
        items:[
            new InputField("target.url", "url"),
        ]
    },
    {
        items:[
            new InputField("target.orderNo", "Sıra nömrəsi"),
            new InputField("target.iframe","iframe", InputFieldType.CHECK_BOX),
            new InputField("target.enabled","Aktiv", InputFieldType.CHECK_BOX),
        ]
    }
];

export default class MenuEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/menus/{id}?projection=idNameProjection"
                    endpoint_add_or_save="/api/menus"
                    formFields={formFields}
                />
        )
    }
}