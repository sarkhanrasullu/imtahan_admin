import React, { Component } from 'react';
import NavbarWrapper from '../../components/UI/NavbarWrapper';

export default class MainPageContainer extends Component {
  render() {
    const {loggedInUser} = this.props;
    return (
            <React.Fragment>
                <NavbarWrapper show={loggedInUser}/>
                <div style={{paddingTop:30}}>
                    {this.props.children}
                </div>
            </React.Fragment>
    )
  }
}
