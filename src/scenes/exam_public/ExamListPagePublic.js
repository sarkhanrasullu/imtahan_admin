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
];

export default class ExamListPagePublic extends Component {
  render() {
    return (
      <EntityListPage
          noPagination
          readOnly
          endpoint_select="/api/exams"
          endpoint_delete="/api/exams"
          tableProps={{
            columns: columns
          }}
      />
    );
  }
}
