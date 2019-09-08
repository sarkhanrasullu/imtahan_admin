import React, { Component } from "react";
import { TableColumn } from "../../components/datatable/DataTableTypes";
import EntityListPage from "../../components/entitylistpage/EntityListPage";

const columns = [
  new TableColumn("id"),
  new TableColumn("title", "Sual başlığı"),
  new TableColumn("rightAnswer", "Doğru cavab"),
  new TableColumn("examQuestionTypeId.name", "Tipi"),
  new TableColumn("enabled", "Aktiv")
];



export default class ExamQuestionListPage extends Component {
  render() {
    return (
      <div style={{marginTop:10}}>
        <h1 className="text-center">Sualları əlavə edin</h1>
        <EntityListPage
            endpoint_select="/api/examQuestions?projection=examQuestionProjection"
            endpoint_delete="/api/examQuestions"
            tableProps={{
              columns: columns
            }}
        />
      </div>
    );
  }
}
