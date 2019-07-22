import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name")
];

export default class PageEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                save_endpoint="/pages"
                select_endpoint="/pages"
                    projection="pageProjection"
                    callback_url="/pages"
                    formDataFields={formDataFields}
                />
        )
    }
}