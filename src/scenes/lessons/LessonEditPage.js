import React, { Component } from 'react'
import { InputField } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
    {
        items:[
            new InputField("target.name", "Adı"),
        ]
    }
];

export default class LessonEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/lessons?projection=idNameProjection"
                    endpoint_add_or_save="/api/lessons"
                    formFields={formFields}
                />
        )
    }
}