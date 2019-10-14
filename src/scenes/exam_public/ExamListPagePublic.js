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
                                                                        className="float-right badge p-1"
                                                                      >
                                                                        <span>Başla</span>
                                                                      </MDBBtn>),
];

export default class ExamListPagePublic extends Component {
  render() {
    return (
      <EntityListPage
          noPagination
          readOnly
          endpoint_select="/api/exams"
          noEdit
          noRemove
          tableProps={{
            columns: columns
          }}
      />
    );
  }
}
