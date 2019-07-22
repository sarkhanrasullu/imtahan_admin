import React, { Component } from 'react'
import { InputField } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new InputField("name"       , "Ad"      ),
    new InputField("enabled"   , "Aktiv" ),
];

export default class PageEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    save_endpoint   ="/pages"
                    select_endpoint ="/pages"
                    projection      ="pageProjection"
                    callback_url    ="/pages"
                    formDataFields  ={formDataFields}
                />
        )
    }
}