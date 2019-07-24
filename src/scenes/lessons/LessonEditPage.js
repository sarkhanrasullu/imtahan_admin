import React, { Component } from 'react'
import { InputField } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items:[
            new InputField("name", "Adı"),
        ]
    }
];

export default class LessonEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/lessons"
                    select_endpoint="/lessons"
                    projection="lessonProjection"
                    callback_url="/lessons"
                    formFields={formFields}
                />
        )
    }
}