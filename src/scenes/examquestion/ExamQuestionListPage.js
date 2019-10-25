import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
import { TableColumn } from "../../components/datatable/DataTableTypes";
import EntityListPage from "../../components/entitylistpage/EntityListPage";
import NavbarWrapper from "../../components/UI/NavbarWrapper";

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
      <React.Fragment>
        <NavbarWrapper/>
        <div style={{marginTop:10}}>
          <h1 className="text-center">Sualları əlavə edin</h1>
          <EntityListPage
              notVisible={true}
              endpoint_select={"/api/examQuestions/search/getAllByExamId?examId="+this.props.match.params.examId}
              endpoint_delete="/api/examQuestions"
              tableProps={{
                columns: columns
              }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ExamQuestionListPage;