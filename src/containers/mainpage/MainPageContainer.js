import React, { Component } from 'react';
import NavbarWrapper from '../../components/UI/NavbarWrapper';

export default class MainPageContainer extends Component {
  render() {
    const {loggedInUser} = this.props;
    if(loggedInUser==null || loggedInUser===undefined) return <React.Fragment >
      <div style={{paddingTop:30}}>
                    {this.props.children}
                </div>
    </React.Fragment>;
    return (
            <React.Fragment >
                <NavbarWrapper/>
                <div style={{paddingTop:30}}>
                    {this.props.children}
                </div>
            </React.Fragment>
    )
  }
}
