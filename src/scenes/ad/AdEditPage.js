import React, { Component } from 'react'
import { InputField, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("target.name", "Reklamın adı"),
            new SelectBox("target.userId.id"       , "Reklamı verən şəxs", "/api/users","id","name"),
        ]
    },
    {
        items:[
            new InputField("target.leftSide"       , "Solda reklam"),
            new InputField("target.leftSideLink"   , "Sol reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.rightSide"      , "Sağda reklam"),
            new InputField("target.rightSideLink"  , "Sağ reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.upSide"         , "Yuxarıda reklam"),
            new InputField("target.upSideLink"     , "Yuxarı reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.downSide"       , "Aşağıda reklam"),
            new InputField("target.downSideLink"   , "Aşağı reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.endDate"        , "Reklamın bitmə tarixi"   , InputFieldType.DATE),
        ]
    },
    {
        items:[
            new InputField("target.enabled"         , "Aktiv"                  , InputFieldType.CHECK_BOX),
        ]
    }
];

export default class AdEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/ads/{id}?projection=adProjection"
                    endpoint_add_or_save="/api/ads"
                    formFields={rows}
                />
        )
    }
}