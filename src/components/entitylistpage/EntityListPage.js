import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EntityService from '../../services/EntityService';
import DataTableComponent from '../datatable/DataTableComponent';
import DynamicForm from '../dynamic_form/DynamicForm';
import LoadingSpinner from '../spinner/LoadingSpinner';
import NavbarWrapper from '../UI/NavbarWrapper';

class EntityListPage extends Component {
  
    state = {
      list:[],
      page:1,
      loading: true
    }
    
    service_entity = new EntityService(this, this.props.endpoint_select, this.props.endpoint_add_or_save, this.props.endpoint_delete);

    componentDidMount(){
        this.service_entity.loadItems();
    }

    renderBody = ()=>{
      const {columns} = this.props.tableProps;
      const {list} = this.state;
      if(this.state.loading){
        return <LoadingSpinner/>;
      }else{
           return <DataTableComponent 
                    noPagination={this.props.noPagination}
                    readOnly={this.props.readOnly}
                    handleRemove={this.handleRemove}
                    handleAdd   ={this.handleAdd}
                    handleEdit  ={this.handleEdit}
                    data        ={list}  
                    columns     ={columns} />
      }
    }

    handleRemove = (data)=>{
      this.service_entity.removeItem(data.id)
    }

    handleAdd = ()=>{
      this.props.history.push(this.props.location.pathname+"/create");
    }

    handleEdit = (id)=>{
      this.props.history.push(this.props.location.pathname+"/"+id);
    }

    render() {
        return (
            <React.Fragment>
               <NavbarWrapper/>
              {
              this.props.searchFields?<DynamicForm 
                  sections={
                    [
                      { 
                        rows: this.props.searchFields
                      }
                    ]
                  }
                  submit={{label:"Search", action:null}}/>:null
                }
                  {this.renderBody()}
          </React.Fragment> 
        )
    }
}
 
export default withRouter(EntityListPage);