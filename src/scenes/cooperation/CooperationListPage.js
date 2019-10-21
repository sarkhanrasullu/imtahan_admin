import React, { Component } from 'react';
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityListPage from '../../components/entitylistpage/EntityListPage';

const columns = [
    new TableColumn("fullname","Ad, Soyad"),
    new TableColumn("phone","Telefon nömrəsi"),
    new TableColumn("email","E-mail")
];

export default class CooperationListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    noPagination
                    readOnly
                    noEdit
                    noRemove
                    endpoint_select="/api/cooperations?projection=cooperationProjection"
                    endpoint_delete="/api/cooperations"
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}
