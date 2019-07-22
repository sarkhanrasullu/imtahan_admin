import React, { Component } from 'react'
import { TableColumn, InputField } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new InputField("name"),
    new InputField("url"),
    new InputField("iframe")
];

export default class MenuEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                save_endpoint="/menus"
                select_endpoint="/menus"
                    projection="menuProjection"
                    callback_url="/menus"
                    formDataFields={formDataFields}
                />
        )
    }
}