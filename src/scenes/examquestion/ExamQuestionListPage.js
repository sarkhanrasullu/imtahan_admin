import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { TableColumn } from "../../components/datatable/DataTableTypes";
import EntityListPage from "../../components/entitylistpage/EntityListPage";

const columns = [
  new TableColumn("id"),
  new TableColumn("title", "Sual başlığı"),
  new TableColumn("rightAnswer", "Doğru cavab"),
  new TableColumn("examQuestionTypeId.name", "Tipi"),
  new TableColumn("enabled", "Aktiv")
];



class ExamQuestionListPage extends Component {
  render() {
    return (
      <div style={{marginTop:10}}>
        <h1 className="text-center">Sualları əlavə edin</h1>
        <EntityListPage
            endpoint_select={"/api/examQuestions/search/getAllByExamId?examId="+this.props.match.params.examId}
            endpoint_delete="/api/examQuestions"
            tableProps={{
              columns: columns
            }}
        />
      </div>
    );
  }
}

export default withRouter(ExamQuestionListPage)