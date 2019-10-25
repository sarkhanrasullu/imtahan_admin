import { MDBBtn, MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { Component } from 'react';
import StateUtil from '../../utils/StateUtil';
import ModalYesNo from '../modalyesno/ModalYesNo';
import PaginationWrapper from '../UI/PaginationWrapper';

export default class DataTableComponent extends Component {
 
    state = {
        selectedRowData:null,
        modalState:{
            show:false
        }
    }

    render() {
        return this.renderTable();
    }

    renderHeader(){
        const {columns} = this.props; 
        const result= columns.map((column, index)=>{
            if(column.type!=="empty"){
                return <th key={"h"+index}>{column.label}</th>
            }
            return null;
        });

        if(this.props.handleEdit)
            result.push(
                <th style={{width:60}} key={"edit"}></th>
            );
        if(this.props.handleRemove)
            result.push(
                <th style={{width:60}} key={"remove"}></th>
            );
        return (<tr>{result}</tr>);
    }

    appendEdit(row, data){
        row.push(
            <td key={"edit"}>
                <MDBIcon style={{margin:"10px 10px 10px 15px",cursor:"pointer"}} size="lg" far icon="edit" onClick={()=>{this.props.handleEdit(data.id)}}/>
            </td>
        )
    }

    appendRemove(row, data){
        row.push(
            <td key={"remove"}>
                    <MDBIcon style={{margin:"10px 10px 10px 15px",cursor:"pointer"}} onClick={()=>{this.toggle(data)}} size="lg" far icon="trash-alt" />
            </td>
        )
    } 

    toggle = (data)=>{
        const {modalState} = this.state;
        const state = {...this.state};
        state.selectedRowData = data;
        modalState.show = !modalState.show;
        this.setState(state);
    }
 
    renderBody(){
        const {data, columns} = this.props; 
        console.log(data);
        if(!data || data.length===0||!columns || columns.length===0) return null;

        const result= data.map((row, index)=>{
            const resRow = columns.map((column, index)=>{
                // console.log(row);
                // console.log(column);
                let data = StateUtil.renderData(row, column); 
                //console.log(data);
                if(data===null) return null;
                return <td style={{height:10}} key={"btd"+index}>{data}</td>
            });
            if(this.props.handleEdit)
                this.appendEdit(resRow, row);
            if(this.props.handleRemove)
            this.appendRemove(resRow, row);
            return (<tr key={"btr"+index}>{resRow}</tr>)
        });
        
       return result;
    }

    renderTable(){
       const {handleRemove, readOnly, noPagination} = this.props;
       const result = (
           <React.Fragment>
                {noPagination?null:<PaginationWrapper/>}
                {readOnly?null:<MDBBtn onClick={()=>{this.props.handleAdd()}}>Əlavə Et</MDBBtn>}
                <MDBTable bordered className={"table-sm"}>
                    <MDBTableHead>
                        {this.renderHeader()}
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.renderBody()}
                    </MDBTableBody>
                </MDBTable>
                {noPagination?null:<PaginationWrapper/>}
                <ModalYesNo state={this.state.modalState} onClickYes={()=>handleRemove(this.state.selectedRowData)}/>
            </React.Fragment>
       )

       return result;
    }
}
 
