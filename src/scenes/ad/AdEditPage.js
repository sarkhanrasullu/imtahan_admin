import React, { Component } from 'react'
import { InputField, SelectBox, InputFieldType } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    new InputField("name"),
    new InputField(null,null,null),
    new InputField("leftSide"       , "Sol hissə"),
    new InputField("leftSideLink"   , "Sol hissə keçidi"),
    new InputField("rightSide"      , "Sağ hissə"),
    new InputField("rightSideLink"  , "Sağ hissə keçidi"),
    new InputField("upSide"         , "Yuxarı hissə"),
    new InputField("upSideLink"     , "Yuxarı hissə keçidi"),
    new InputField("downSide"       , "Aşağı hissə"),
    new InputField("downSideLink"   , "Aşağı hissə keçidi"),
    new InputField("endDate"        , "Reklamın bitmə tarixi"   , InputFieldType.DATE),
    new InputField("enabled"         , "Aktiv"                  , InputFieldType.CHECK_BOX),
    new SelectBox("userId.id"       , "Reklamı verən şəxs", "/users","id","name"),
];

export default class AdEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/ads"
                    select_endpoint="/ads"
                    projection="adProjection"
                    callback_url="/ads"
                    formFields={formFields}
                />
        )
    }
}