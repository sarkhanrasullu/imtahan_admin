import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name"),
    new TableColumn("leftSide"),
    new TableColumn("rightSide"),
    new TableColumn("upSide"),
    new TableColumn("downSide"),
    new TableColumn("leftSide"),
];

export default class AdEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/ads"
                    projection="adProjection"
                    callback_url="/ads"
                    formDataFields={formDataFields}
                />
        )
    }
}