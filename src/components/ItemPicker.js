import React, { Component } from "react";
import StateUtil from './../utils/StateUtil';
import EntityService from "../services/EntityService";

export default class ItemPicker extends Component {
    state = {
      val: null,
      list: []
    }

    service = new EntityService(this);

    componentDidMount(){
      const {item} = this.props;
      console.log(item);
      if(item.endPoint!=null){
        this.service.loadItems(item.endPoint);
      }
    }

    render() {
        const {error, component, onValueChange, item} = this.props;

        let items = this.props.items;
        if(!items) items = this.state.list;

        const {label} = this.props.item;
        let pickerItems = null;
        if(items!=null){
          pickerItems = items.map((item_, index)=>{
              return <option key={index} value={item_[item.valueParam]}>{item_[item.displayParam]}</option>
          })
        }

        return (
            <div style={styles.sectionInput}>
              <select
                style={styles.picker} 
                placeholder={label}
                onChange={event => {
                  const val = event.target.value;

                    if(onValueChange){
                      onValueChange(val);
                    }
                    // this.setState({val: val});
                    StateUtil.handleFieldChange(this, val);
                    console.log(component.state);
                  } 
                }
                value={this.state.val}
              >
                {pickerItems}
              </select>
            </div>
        )
    }
}

const styles = {
    picker:{
      height:"100%", width:"100%",marginLeft:0, paddingLeft: 0
    },
    pickerText:{
      paddingLeft:5
    },
    pickerPlaceHolder:{
      color:"#666666", paddingLeft: 5 
    },
    pickerPlaceHolderError:{
      color:"red", paddingLeft: 5 
    },
    sectionInput: {
      width: "100%",
      borderWidth: 0.3,
      borderRadius: 2,
      height: 40,
      marginTop: 10,
    },
    errorInput: {borderColor:"red", borderWidth:1}
  };
  