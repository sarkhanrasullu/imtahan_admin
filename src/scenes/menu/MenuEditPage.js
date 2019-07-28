import React, { Component } from 'react'
import { InputField, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items:[
            new InputField("name","Adı"),
        ]
    },
    {
        items:[
            new SelectBox ("layoutTypeId.id","Səhifədə yeri", "/menuLayoutTypes",   "id","name"),
        ]
    },
    {
        items:[
            new InputField("url"),
        ]
    },
    {
        items:[
            new InputField("orderNo", "Sıra nömrəsi"),
            new InputField("iframe","iframe", InputFieldType.CHECK_BOX),
            new InputField("enabled","Aktiv", InputFieldType.CHECK_BOX),
        ]
    }
];

export default class MenuEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/menus?projection=idNameProjection"
                    endpoint_add_or_save="/api/menus"
                    formFields={formFields}
                />
        )
    }
}