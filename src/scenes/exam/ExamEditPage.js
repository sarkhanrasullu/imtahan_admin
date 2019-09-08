import { MDBBtn } from 'mdbreact';
import React, { Component } from 'react';
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

export default class ExamEditPage extends Component {
    render() {
        return (
                <React.Fragment>
                  <div className="text-center">
                        <MDBBtn color="light-blue" onClick={()=>
                          {
                            window.location.href= "/questions";
                          } 
                        }>
                            SUALLARI ƏLAVƏ ET
                        </MDBBtn>
                    </div>
                  <EntityEditPage
                      endpoint_select="/api/exams/{id}?projection=examProjection"
                      endpoint_add_or_save="/api/exams"
                      formFields={rows}
                  />
                  
                  
                </React.Fragment>
        )
    }
}