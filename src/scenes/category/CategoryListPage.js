import { MDBBtn } from 'mdbreact';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { TableColumn, TableColumnType } from '../../components/datatable/DataTableTypes';
import EntityListPage from '../../components/entitylistpage/EntityListPage';

const columns = [
    new TableColumn("id","id"),
    new TableColumn("name","Kateqoriyanın adı"),
    new TableColumn("parentId.name","Üst kateqoriyanın adı"),
    new TableColumn("", "", TableColumnType.CUSTOM_COMPONENT, <MDBBtn
                                                                        size="sm"
                                                                        color="danger"
                                                                        className="float-right badge p-1 start_btn"
                                                                        onClick={(evt, data)=>{
                                                                          var clickedElement = evt.currentTarget;
                                                                          var id = clickedElement.parentNode.parentNode.getElementsByTagName('td')[0].innerHTML;
                                                                          window.location.href="/categories/"+id;
                                                                        }}
                                                                      >
                                                                        <span>Alt Kateqoriyalara bax</span>
                                                                      </MDBBtn>),
];

class CategoryListPage extends Component {
    render() {
        const parentId = this.props.match.params.entityId!=='all'?this.props.match.params.entityId:"";
        return ( 
                <EntityListPage
                    noPagination
                    endpoint_select={"/api/lessonCategories/search/findByParentIdId?parentId="+parentId+"&projection=lessonCategoryProjection"}
                    endpoint_delete="/api/lessonCategories"
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}

export default withRouter(CategoryListPage);
