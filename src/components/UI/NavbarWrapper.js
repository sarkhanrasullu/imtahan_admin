import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginService from "../../services/LoginService";
import './navbar.css';
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
        <a className="navbar-link" href={link}>{label}</a>
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
    const {notVisible} = this.props;
    if(notVisible) return null;

   
    const loggedInUser = this.service_login.getLoggedInUser();
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#82b1ff", marginBottom: 30, }} dark expand="md">
          {loggedInUser ? (
            <div id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <div class="navbar-link-wrapper">
              {this.linkItem("/","ADMIN PANEL")}
              {this.linkItem("/users","İstifadəçilər")}
                {this.linkItem("/teachers","Müəllimlər")}
                {this.linkItem("/pages","Səhifələr")}
                {this.linkItem("/menus","Menular")}
                {this.linkItem("/lessons","Dərslər")}
                {this.linkItem("/courses","Təhsil mərkəzləri")}
                {this.linkItem("/announcements","Elanlar")}
                {this.linkItem("/ads","Reklamlar")}
                {this.linkItem("/exams","İmtahanlar")}
                {this.linkItem("/categories/all","Kateqoriyalar")}
                <a class="navbar-link float-right mr-2" onClick={() => this.service_login.logout()}>({loggedInUser.name}) LOGOUT</a>
              </div>
            </div>
          ) : null}
        </div>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarWrapper));
