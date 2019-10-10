import { MDBBtn } from 'mdbreact';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
          new InputField("target.name", "Adı"),
        ]
    },
    {
        items:[
          new InputField("target.thumbnail", "Şəkil", InputFieldType.IMAGE_BASE64),
          null
        ]
    },
    {
      items:[
        new InputField("target.duration", "Müddəti"),
        new InputField("target.price", "Qiymət"),
        new InputField("target.classes", "Siniflər"),
      ]
    },
    {
      items:[
        new SelectBox("target.sectorId.id", "Sektor", "/api/sectors","id","name"),
        new SelectBox("target.examTypeId.id", "Tipi", "/api/examTypes", "id","name"),
      ]
    },
    {
      items:[
        new InputField("target.description", "İzahat", InputFieldType.TEXT_AREA),
      ]
    },
    {
      items:[
        new InputField("target.enabled", "Aktiv", InputFieldType.CHECK_BOX),
      ]
    },
  ];

class ExamEditPagePublic extends Component {
    render() {
        return (
                <React.Fragment>
                  {
                    this.props.match.params.entityId>0?
                    <div className="text-center">
                        <MDBBtn color="light-blue" onClick={()=>
                          {
                            window.location.href= "/exams/"+this.props.match.params.entityId+"/questions";
                          } 
                        }>
                            SUALLARI ƏLAVƏ ET
                        </MDBBtn>
                    </div>:null
                  }
                  <EntityEditPage
                      endpoint_select="/api/exams/{id}?projection=examProjection"
                      endpoint_add_or_save="/api/exams"
                      formFields={rows}
                  />
                  
                  
                </React.Fragment>
        )
    }
}

export default withRouter(ExamEditPagePublic);