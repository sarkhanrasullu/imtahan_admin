import React, { Component } from "react";
import EntityListPage from "../../components/entitylistpage/EntityListPage";
import {
  TableColumn,
  InputField,
  InputFieldType,
  SelectBox,
  TableColumnType
} from "../../components/datatable/DataTableTypes";

const columns = [
  new TableColumn("id"),
  new TableColumn("name", "Ad"),
  new TableColumn("surname", "Soyad"),
  new TableColumn("age", "Yaş"),
  new TableColumn("email", "Email"),
  new TableColumn("phone", "Nömrə"),
  new TableColumn("thumbnail", "Şəkil", "image"),
  new TableColumn("cityId.name", "Şəhər"),
  new TableColumn("address", "Address"),
  new TableColumn("roleId.name", "Role"),
  new TableColumn("approved", "Email Təsdiqlənib"),

  new TableColumn("enabled", "Aktiv"),

  new TableColumn("insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
  new TableColumn("insertDate","Daxil edilmə vaxtı",TableColumnType.DATE_TIME),
  new TableColumn("lastChangeDate","Son dəyişilmə tarixi",TableColumnType.DATE_TIME)
];

const fields = [
  {
    items: [
      new InputField("name", "Ad"),
      new InputField("surname", "Soyad"),
      new InputField("email", "Email"),
      new InputField("phone", "Nömrə"),
      new InputField("age", "Yaş"),
    ]
  },
  {
    items: [
      new InputField("insertDate","Daxil edilmə tarixi",InputFieldType.DATE_TIME),
      new InputField("lastChangeDate","Son dəyişmə tarixi",InputFieldType.DATE_TIME),
      new SelectBox("cityId.id", "Şəhər", "/cities", "id", "name"),
      new SelectBox( "insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
      new InputField("approved", "Təsdiqlənib", InputFieldType.CHECK_BOX),
      new InputField("enabled", "Aktiv", InputFieldType.CHECK_BOX)
    ]
  }
];

export default class UserListPage extends Component {
  render() {
    return (
      <EntityListPage
        endpoint_select="/api/users"
        endpoint_delete="/api/users"
        searchFields={fields}
        tableProps={{
          columns: columns
        }}
      />
    );
  }
}
