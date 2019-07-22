import React, { Component } from 'react'
import { InputField } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new InputField("name"),
    new InputField("leftSide"),
    new InputField("rightSide"),
    new InputField("upSide"),
    new InputField("downSide"),
    new InputField("leftSide"),
];

export default class AdEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/ads"
                    select_endpoint="/ads"
                    projection="adProjection"
                    callback_url="/ads"
                    formDataFields={formDataFields}
                />
        )
    }
}