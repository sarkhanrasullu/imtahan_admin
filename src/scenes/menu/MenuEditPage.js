import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name"),
    new TableColumn("url"),
    new TableColumn("iframe")
];

export default class MenuEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/menus"
                    projection="menuProjection"
                    callback_url="/menus"
                    formDataFields={formDataFields}
                />
        )
    }
}