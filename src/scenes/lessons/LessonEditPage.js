import React, { Component } from 'react'
import { InputField } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new InputField("nameAz", "name az"),
    new InputField("nameRu", "name ru"),
];

export default class LessonEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                save_endpoint="/lessons"
                select_endpoint="/lessons"
                    projection="lessonProjection"
                    callback_url="/lessons"
                    formDataFields={formDataFields}
                />
        )
    }
}