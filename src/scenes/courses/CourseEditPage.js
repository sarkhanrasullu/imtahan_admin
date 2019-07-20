import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name")
];

export default class CourseEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/courses"
                    projection="courseProjection"
                    callback_url="/courses"
                    formDataFields={formDataFields}
                />
        )
    }
}