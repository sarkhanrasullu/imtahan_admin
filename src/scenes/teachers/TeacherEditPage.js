import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name")
];

export default class TeacherEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/teachers"
                    projection="teacherProjection"
                    callback_url="/teachers"
                    formDataFields={formDataFields}
                />
        )
    }
}