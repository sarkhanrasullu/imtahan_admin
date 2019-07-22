import React, { Component } from 'react'
import { InputField, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new InputField("name"               ,"Adə"                                                      ),
    new InputField("url"                                                                            ),
    new SelectBox ("layoutTypeId.id"    ,"Səhifədə yeri"  , "/menuLayoutTypes",   "id"    ,"name"   ),
    new InputField("iframe"                                                                         ),
    new InputField("enabled"           ,"Aktiv"                                                  ),
    new InputField("orderNo"            , "Sıra nömrəsi"                                            ),
];

export default class MenuEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                save_endpoint="/menus"
                select_endpoint="/menus"
                    projection="menuProjection"
                    callback_url="/menus"
                    formDataFields={formDataFields}
                />
        )
    }
}