import React, { Component } from 'react'
import { InputField, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("name", "Reklamın adı"),
            new SelectBox("userId.id"       , "Reklamı verən şəxs", "/users","id","name"),
        ]
    },
    {
        items:[
            new InputField("leftSide"       , "Solda reklam"),
            new InputField("leftSideLink"   , "Sol reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("rightSide"      , "Sağda reklam"),
            new InputField("rightSideLink"  , "Sağ reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("upSide"         , "Yuxarıda reklam"),
            new InputField("upSideLink"     , "Yuxarı reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("downSide"       , "Aşağıda reklam"),
            new InputField("downSideLink"   , "Aşağı reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("endDate"        , "Reklamın bitmə tarixi"   , InputFieldType.DATE),
        ]
    },
    {
        items:[
            new InputField("enabled"         , "Aktiv"                  , InputFieldType.CHECK_BOX),
        ]
    }
];

export default class AdEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/ads"
                    select_endpoint="/ads?projection=adProjection"
                    callback_url="/ads"
                    formFields={rows}
                />
        )
    }
}