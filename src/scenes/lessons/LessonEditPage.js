import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("nameAz"),
    new TableColumn("nameRu"),
];

export default class LessonEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/lessons"
                    projection="lessonProjection"
                    callback_url="/lessons"
                    formDataFields={formDataFields}
                />
        )
    }
}