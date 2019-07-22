import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("id"         ),
    new TableColumn("name" ,"Adı"),
];

export default class CityEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/cities"
                    select_endpoint="/cities"
                    projection="cityProjection"
                    callback_url="/cities"
                    formDataFields={formDataFields}
                />
        )
    }
}