import React, { Component } from 'react';
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const fields = [
  {
    items:[
      new InputField("target.enabled", "Aktiv", InputFieldType.CHECK_BOX)
    ]
  },
  {
    items:[
      new SelectBox("target.examQuestionTypeId.id", "Tipi", "/api/examTypes?project=idNameProject","id","name"),
    ]
  },
  {
    items:[
      new InputField("target.title", "Sual başlığı"),
    ]
  },
  {
    items:[
      new InputField("target.question", "Sual", InputFieldType.EDITOR),
    ]
  },
  {
    items:[
      new InputField("target.rightAnswer", "Doğru cavab"),
    ]
  },
  {
    items:[
      new SelectBox("target.examId.id", "Imtahan", "/api/exams", "id", "name"),
    ]
  }
];
export default class ExamQuestionEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    fullscreen
                    defaultTarget={
                      {
                        examId:{
                          id:this.props.match.params.examId
                        }
                      }
                    }
                    endpoint_select="/api/examQuestions/{id}"
                    endpoint_add_or_save="/api/examQuestions"
                    formFields={fields}
                />
        )
    }
}