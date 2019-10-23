import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
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
            new SelectBox("target.parentId.id","Üst kategoriyanın adı","/api/lessonCategories?projection=lessonCategoryProjection","id","name"),
        ]
    } 
];
class CategoryEditPage extends Component {

    render() { 
        console.log(this.state);
        return (
                <EntityEditPage
                    defaultTarget={{
                        parentId:{
                            id: this.props.match.params.entityIdParent
                        }
                    }}
                    endpoint_select="/api/lessonCategories/{id}?projection=lessonCategoryProjection"
                    endpoint_add_or_save="/api/lessonCategories"
                    formFields={rows}/>
        )
    }
}

export default withRouter(CategoryEditPage);