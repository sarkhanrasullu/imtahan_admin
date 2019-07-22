import React, { Component } from "react";
import EntityListPage from "../../components/entitylistpage/EntityListPage";
import {
  TableColumn,
  InputField,
  SelectBox,
  InputFieldType,
  TableColumnType
} from "../../components/datatable/DataTableTypes";

const columns = [
  new TableColumn("id"),
  new TableColumn("name", "Adı"),
  new TableColumn("userId.name", "Müştəri"),
  new TableColumn("endDate", "Birmət vaxtı"),

  new TableColumn("insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
  new TableColumn("insertDate", "Daxil edilmə vaxtı", TableColumnType.DATE_TIME),
  new TableColumn("lastChangeDate", "Son dəyişilmə tarixi", TableColumnType.DATE_TIME),
];

const fields = [
  new InputField("id"),
  new InputField("name", "Adı"),
  new SelectBox("userId.id", "Müştəri", "/users", "id", "name"),
  new InputField("enabled", "Aktiv", InputFieldType.CHECK_BOX),
  new InputField("endDate", "Bitmə vaxtı"),

  new SelectBox("insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
  new InputField("insertDate", "Daxil edilmə vaxtı", InputFieldType.DATE_TIME),
  new InputField("lastChangeDate", "Son dəyişilmə tarixi", InputFieldType.DATE_TIME),
];

export default class AdListPage extends Component {
  render() {
    return (
      <EntityListPage
        endpoint="ads"
        searchDataFields={fields}
        tableProps={{
          columns: columns
        }}
      />
    );
  }
}
