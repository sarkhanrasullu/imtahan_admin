import { MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from "mdbreact";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import LoginService from "../../services/LoginService";

class NavbarWrapper extends Component {
  service_login = new LoginService(this);
  state = {
    isOpen: false,
    loginModal: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleLogin = () => {
    this.setState({
      loginModal: !this.state.loginModal
    });
  };

  componentDidUpdate() {
    if (this.props.user && this.state.loginModal) {
      this.setState({ loginModal: false });
    }
  }

  linkItem = (link, label) => {
    return (
      <MDBNavItem>
        <MDBNavLink to={link}>{label}</MDBNavLink>
      </MDBNavItem>
    );
  };

  show = ()=>{
    const pathname = this.props.location.pathname;

    if(pathname.includes("login") ||
    pathname.includes("examlist")||
    pathname.includes("courseprofile")||
    pathname.includes("teacherprofile")||
    pathname.includes("usersregister")) return false;

    return true;
  }
  render() {
    if(this.show()===false){
      return null;
    }
    const {show} = this.props;
    if(!show) return null;

   
    const loggedInUser = this.service_login.getLoggedInUser();
    return (
      <React.Fragment>
        <MDBNavbar style={{ backgroundColor: "#82b1ff" }} dark expand="md">
          <MDBNavbarBrand>
            <MDBNavLink to="/">
              <strong className="white-text">ADMIN PANEL</strong>
            </MDBNavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          {loggedInUser ? (
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                {this.linkItem("/users","İstifadəçilər")}
                {this.linkItem("/teachers","Müəllimlər")}
                {this.linkItem("/pages","Səhifələr")}
                {this.linkItem("/menus","Menular")}
                {this.linkItem("/lessons","Dərslər")}
                {this.linkItem("/courses","Təhsil mərkəzləri")}
                {this.linkItem("/announcements","Elanlar")}
                {this.linkItem("/ads","Reklamlar")}
                {this.linkItem("/exams","İmtahanlar")}
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem onClick={() => this.service_login.logout()}>
                  <MDBNavLink to="#">({loggedInUser.email}) LOGOUT</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          ) : null}
        </MDBNavbar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavbarWrapper));
