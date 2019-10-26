import React, { Component } from "react";
import { TableColumn, TableColumnType } from "../../components/datatable/DataTableTypes";
import EntityListPage from "../../components/entitylistpage/EntityListPage";

const columns = [
  new TableColumn("id"),
  new TableColumn("name", "Adı"),
  new TableColumn("thumbnail", "Şəkil", TableColumnType.IMAGE_BASE64),
  new TableColumn("description", "İzahat"),
  new TableColumn("duration", "Müddət"),
  new TableColumn("price", "Qiymət"),
  new TableColumn("enabled", "Aktiv"),
  new TableColumn("sectorId.name", "Sector"),
  new TableColumn("examTypeId.name", "Tipi"),
  new TableColumn("lessonCategoryId.name", "Kateqoriya"),
  // new TableColumn("insertUserId.name", "Daxil edən şəxs"),
  new TableColumn("insertDate", "Daxil edilmə tarixi", TableColumnType.DATE_TIME),
  new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];
 

export default class ExamListPage extends Component {
  render() {
    return (
      <EntityListPage
          endpoint_select="/api/exams"
          endpoint_delete="/api/exams"
          tableProps={{
            columns: columns
          }}
      />
    );
  }
}
