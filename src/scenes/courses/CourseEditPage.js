import React, { Component } from 'react'
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formFields = [
        new InputField("name"           ,"Ad"                                       ),
        new InputField("email"          ,"Email"                                    ),
        new InputField("phone"          ,"Nömrə"                                    ),
        new InputField("facebook"                                                   ),
        new InputField("instagram"                                                  ),
        new InputField("youtube"                                                    ),
        new InputField("thumbnail"      ,"Şəkil"        , InputFieldType.IMAGE      ),
        new SelectBox ("cityId.name"    ,"Şəhər"        ,"/cities","id","name"      ),
        new InputField("address"        ,"Adress"                                   ),
        new InputField("website"        ,"Website"                                  ),
        new InputField("userId.name"    ,"Qeydiyyat edən şəxs"                      ),
        new InputField("enabled"    ,"Aktiv", InputFieldType.CHECK_BOX                      ),
        new InputField("description"    ,"Ətraflı"                                  ),
        new SelectBox ("userId.id"      ,"Istifadəçi"   ,"/users","id","name"),
    ];

export default class CourseEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint="/courses"
                    select_endpoint="/courses"
                    projection="courseProjection"
                    callback_url="/courses"
                    formFields={formFields}
                />
        )
    }
}