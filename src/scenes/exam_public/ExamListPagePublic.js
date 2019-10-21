import { MDBBtn } from 'mdbreact';
import React, { Component } from "react";
import { TableColumn, TableColumnType } from "../../components/datatable/DataTableTypes";
import EntityListPage from "../../components/entitylistpage/EntityListPage";

const columns = [
  new TableColumn("name", "Adı"),
  new TableColumn("thumbnail", "Şəkil", TableColumnType.IMAGE_BASE64),
  new TableColumn("description", "İzahat"),
  new TableColumn("duration", "Müddət"),
  new TableColumn("sectorId.name", "Sector"),
  new TableColumn("examTypeId.name", "Tipi"),
  new TableColumn("startExam", "", TableColumnType.CUSTOM_COMPONENT, <MDBBtn
                                                                        size="sm"
                                                                        color="danger"
                                                                        className="float-right badge p-1 start_btn"
                                                                        onClick={(evt, data)=>{
                                                                          var clickedElement = evt.currentTarget;
                                                                          var btns = document.getElementsByClassName('start_btn');
                                                                          var index = [].indexOf.call(btns, clickedElement);
                                                                          index+=1;
                                                                          window.open(
                                                                            "https://www.imtahanlar.az/startexam/"+index,
                                                                            '_blank'
                                                                          );
                                                                        }}
                                                                      >
                                                                        <span>Başla</span>
                                                                      </MDBBtn>),
];

export default class ExamListPagePublic extends Component {
  render() {
    return (
      <EntityListPage
        notVisible
          noPagination
          readOnly
          noEdit
          noRemove
          endpoint_select="/api/exams"
          tableProps={{
            columns: columns
          }}
      />
    );
  }
}
