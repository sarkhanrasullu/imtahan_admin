import React, { Component } from "react";
import { InputField, InputFieldType, SelectBox, TableColumn, TableColumnType } from "../../components/datatable/DataTableTypes";
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
  new TableColumn("classes", "Siniflər"),
  new TableColumn("insertUserId.name", "Daxil edən şəxs"),
  new TableColumn("insertDate", "Daxil edilmə tarixi", TableColumnType.DATE_TIME),
  new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];

const rows = [
  {
    items:[
      new InputField("target.name", "Adı"),
    ]
  },
  {
    items:[
      new InputField("target.duration", "Müddəti"),
      new InputField("target.price", "Qiymət"),
      new InputField("target.classes", "Siniflər"),
      new InputField("target.insertDate", "Daxil edilmə tarixi", InputFieldType.DATE_TIME),
      new InputField("target.lastChangeDate", "Son dəyişilmə tarixi", InputFieldType.DATE_TIME),
    ]
  },
  {
    items:[
      new SelectBox("target.sectorId.id", "Sektor", "/api/sectors?project=idNameProject","id","name"),
      new SelectBox("target.examTypeId.id", "Tipi", "/api/examTypes?project=idNameProject", "id","name"),
      new SelectBox("target.insertUserId.id", "Daxil edən şəxs", "/api/users", "id", "name"),
      new InputField("target.enabled", "Aktiv", InputFieldType.CHECK_BOX),
      null
    ]
  }
];

export default class ExamListPage extends Component {
  render() {
    return (
      <EntityListPage
          endpoint_select="/api/exams"
          endpoint_delete="/api/exams"
          searchFields={rows}
          tableProps={{
            columns: columns
          }}
      />
    );
  }
}
