import React, { Component } from "react";
import { MDBView, MDBBadge } from "mdbreact";
import ImageMask from './ImageMask';

export default class Image extends Component {
  render() {
      const {image, onDelete, onUpload} = this.props;
    return (
            <div className="md-form">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img className="img-fluid" src={image} alt="" style={{height:100, width:"100%"}}/>
                <ImageMask onClick={onUpload}/>
              </MDBView>
           
              <MDBBadge color="pink" onClick={onDelete} style={{cursor:"pointer"}}> Delete </MDBBadge>
             </div>
         
    );
  }
 
}
