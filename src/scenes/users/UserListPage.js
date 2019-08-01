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
  new TableColumn("thumbnail", "Şəkil", TableColumnType.IMAGE_BASE64),
  new TableColumn("cityId.name", "Şəhər"),
  new TableColumn("address", "Address"),
  new TableColumn("roleId.name", "Role"),
  new TableColumn("approved", "Email Təsdiqlənib"),

  new TableColumn("enabled", "Aktiv"),

  new TableColumn("insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
  new TableColumn("insertDate","Daxil edilmə tarixi",TableColumnType.DATE_TIME),
  new TableColumn("lastChangeDate","Son dəyişilmə tarixi",TableColumnType.DATE_TIME)
];

const fields = [
  {
    items: [
      new InputField("target.name", "Ad"),
      new InputField("target.surname", "Soyad"),
      new InputField("target.email", "Email"),
      new InputField("target.phone", "Nömrə"),
      new InputField("target.age", "Yaş"),
    ]
  },
  {
    items: [
      new InputField("target.insertDate","Daxil edilmə tarixi",InputFieldType.DATE_TIME),
      new InputField("target.lastChangeDate","Son dəyişmə tarixi",InputFieldType.DATE_TIME),
      new SelectBox("target.cityId.id", "Şəhər", "/cities", "id", "name"),
      new SelectBox( "insertUserId.id", "Daxil edən şəxs", "/users", "id", "name"),
      new InputField("target.approved", "Təsdiqlənib", InputFieldType.CHECK_BOX),
      new InputField("target.enabled", "Aktiv", InputFieldType.CHECK_BOX)
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
