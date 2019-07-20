import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import MainPageContainer from "./containers/mainpage/MainPageContainer";
import UserListPage from "./scenes/users/UserListPage";
import UserEditPage from "./scenes/users/UserEditPage";
import Login from "./scenes/login/Login";
import LoginService from "./services/LoginService";
import { withRouter } from "react-router-dom";
import TeacherListPage from "./scenes/teachers/TeacherListPage";
import TeacherEditPage from "./scenes/teachers/TeacherEditPage";
import PageListPage from "./scenes/pages/PageListPage";
import PageEditPage from "./scenes/pages/PageEditPage";
import MenuListPage from "./scenes/menu/MenuListPage";
import MenuEditPage from "./scenes/menu/MenuEditPage";
import LessonListPage from "./scenes/lessons/LessonListPage";
import LessonEditPage from "./scenes/lessons/LessonEditPage";
import CourseListPage from "./scenes/courses/CourseListPage";
import CourseEditPage from "./scenes/courses/CourseEditPage";
import AnnouncementListPage from "./scenes/announcement/AnnouncementListPage";
import AnnouncementEditPage from "./scenes/announcement/AnnouncementEditPage";
import AdListPage from "./scenes/ad/AdListPage";
import AdEditPage from "./scenes/ad/AdEditPage";

class App extends Component {

  service_login = new LoginService(this);

  render() {
    const loggedInUser = this.service_login.getLoggedInUser();
    return (
      <MainPageContainer>
           {loggedInUser?
         <Switch>
            <Route exact path="/users" component={UserListPage} />
            <Route exact path="/users/:entityId" component={UserEditPage} />
            <Route exact path="/teachers" component={TeacherListPage} />
            <Route exact path="/teachers/:entityId" component={TeacherEditPage} />
            <Route exact path="/pages" component={PageListPage} />
            <Route exact path="/pages/:entityId" component={PageEditPage} />
            <Route exact path="/menus" component={MenuListPage} />
            <Route exact path="/menus/:entityId" component={MenuEditPage} />
            <Route exact path="/lessons" component={LessonListPage} />
            <Route exact path="/lessons/:entityId" component={LessonEditPage} />
            <Route exact path="/courses" component={CourseListPage} />
            <Route exact path="/courses/:entityId" component={CourseEditPage} />
            <Route exact path="/announcements" component={AnnouncementListPage} />
            <Route exact path="/announcements/:entityId" component={AnnouncementEditPage} />
            <Route exact path="/ads" component={AdListPage} />
            <Route exact path="/ads/:entityId" component={AdEditPage} />
            <Route component={UserListPage} />
          </Switch>:    
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        }
      </MainPageContainer>        
    );
  }
}

export default withRouter(App);
