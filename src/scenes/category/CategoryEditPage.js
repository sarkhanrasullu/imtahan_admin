import React, { Component } from 'react';
import { InputField, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("target.name","Kategoriyanın adı"),
        ]
    },
    {
        items:[
            new SelectBox("target.parentId.id","Üst kategoriyanın adı","/api/lessonCategories","id","name"),
        ]
    } 
];
export default class CategoryEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/lessonCategories/{id}?projection=lessonCategoryProjection"
                    endpoint_add_or_save="/api/lessonCategories"
                    formFields={rows}
                />
        )
    }
}