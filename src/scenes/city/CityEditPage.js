import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    new TableColumn("id"         ),
    new TableColumn("name" ,"Adı"),
];

export default class CityEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_add_or_save="/api/cities"
                    endpoint_select="/api/cities?projection=cityProjection"
                    formFields={formFields}
                />
        )
    }
}