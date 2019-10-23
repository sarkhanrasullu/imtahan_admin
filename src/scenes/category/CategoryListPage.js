import { MDBBtn } from 'mdbreact';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { TableColumn, TableColumnType } from '../../components/datatable/DataTableTypes';
import EntityListPage from '../../components/entitylistpage/EntityListPage';

const columns = [
    new TableColumn("name","Kateqoriyanın adı"),
    new TableColumn("parentId.name","Üst kateqoriyanın adı"),
    new TableColumn("", "", TableColumnType.CUSTOM_COMPONENT, <MDBBtn
                                                                        size="sm"
                                                                        color="danger"
                                                                        className="float-right badge p-1 start_btn"
                                                                        onClick={(evt, data)=>{
                                                                          var clickedElement = evt.currentTarget;
                                                                          var btns = document.getElementsByClassName('start_btn');
                                                                          var index = [].indexOf.call(btns, clickedElement);
                                                                          index+=1;
                                                                          window.location.href="/categories/"+index;
                                                                        }}
                                                                      >
                                                                        <span>Alt Kateqoriyalara bax</span>
                                                                      </MDBBtn>),
];

class CategoryListPage extends Component {
    render() {
        const parentId = this.props.match.params.entityId?this.props.match.params.entityId:"";
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
