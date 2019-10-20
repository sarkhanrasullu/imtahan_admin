import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import AdEditPage from "./scenes/ad/AdEditPage";
import AdListPage from "./scenes/ad/AdListPage";
import AnnouncementEditPage from "./scenes/announcement/AnnouncementEditPage";
import AnnouncementListPage from "./scenes/announcement/AnnouncementListPage";
import AnnouncementEditPagePublic from "./scenes/announcement_public/AnnouncementEditPagePublic";
import AnnouncementListPagePublic from "./scenes/announcement_public/AnnouncementListPagePublic";
import CourseEditPage from "./scenes/courses/CourseEditPage";
import CourseListPage from "./scenes/courses/CourseListPage";
import CourseEditPagePublic from "./scenes/courses_public/CourseEditPagePublic";
import ExamEditPage from "./scenes/exam/ExamEditPage";
import ExamListPage from "./scenes/exam/ExamListPage";
import ExamQuestionEditPage from "./scenes/examquestion/ExamQuestionEditPage";
import ExamQuestionListPage from "./scenes/examquestion/ExamQuestionListPage";
import ExamListPagePublic from "./scenes/exam_public/ExamListPagePublic";
import ExamPagePublic from "./scenes/exam_public/exampage_public/ExamPagePublic";
import LessonEditPage from "./scenes/lessons/LessonEditPage";
import LessonListPage from "./scenes/lessons/LessonListPage";
import Login from "./scenes/login/Login";
import UserLoginPublic from "./scenes/login/UserLoginPublic";
import MainPage from "./scenes/main/MainPage";
import MenuEditPage from "./scenes/menu/MenuEditPage";
import MenuListPage from "./scenes/menu/MenuListPage";
import PageEditPage from "./scenes/pages/PageEditPage";
import PageListPage from "./scenes/pages/PageListPage";
import TeacherEditPage from "./scenes/teachers/TeacherEditPage";
import TeacherListPage from "./scenes/teachers/TeacherListPage";
import TeacherEditPagePublic from "./scenes/teachers_public/TeacherEditPagePublic";
import UserEditPage from "./scenes/users/UserEditPage";
import UserListPage from "./scenes/users/UserListPage";
import UserLabel from "./scenes/users_public/UserLabel";
import UserRegisterPage from "./scenes/users_public/UserRegisterPage";
import LoginService from "./services/LoginService";

class App extends Component {

  service_login = new LoginService(this);

  render() {
    const loggedInUser = this.service_login.getLoggedInUser();
    return (
            loggedInUser? 
                    <Switch>
                        <Route exact path="/users"                              component={UserListPage}          />
                        <Route exact path="/users/:entityId"                    component={UserEditPage}          />
                        <Route exact path="/teachers"                           component={TeacherListPage}       />
                        <Route exact path="/teachers/:entityId"                 component={TeacherEditPage}       />
                        <Route exact path="/pages"                              component={PageListPage}          />
                        <Route exact path="/pages/:entityId"                    component={PageEditPage}          />
                        <Route exact path="/menus"                              component={MenuListPage}          />
                        <Route exact path="/menus/:entityId"                    component={MenuEditPage}          />
                        <Route exact path="/lessons"                            component={LessonListPage}        />
                        <Route exact path="/lessons/:entityId"                  component={LessonEditPage}        />
                        <Route exact path="/courses"                            component={CourseListPage}        />
                        <Route exact path="/courses/:entityId"                  component={CourseEditPage}        />
                        <Route exact path="/announcements"                      component={AnnouncementListPage}  />
                        <Route exact path="/announcements/:entityId"            component={AnnouncementEditPage}  />
                        <Route exact path="/ads"                                component={AdListPage}            />
                        <Route exact path="/ads/:entityId"                      component={AdEditPage}            />
                        <Route exact path="/exams"                              component={ExamListPage}          />
                        <Route exact path="/exams/:entityId"                    component={ExamEditPage}          />
                        <Route exact path="/exams/:examId/questions"            component={ExamQuestionListPage}  />
                        <Route exact path="/exams/:examId/questions/:entityId"  component={ExamQuestionEditPage}  />
                        <Route exact path="/"                                   component={MainPage}              />
                        
                        <Route exact path="/usersregister/:entityId"            component={UserRegisterPage}       />
                        <Route exact path="/teacherprofile/:entityId"           component={TeacherEditPagePublic}  />
                        <Route exact path="/courseprofile/:entityId"            component={CourseEditPagePublic}   />
                        <Route exact path="/examlist"                           component={ExamListPagePublic}     />
                        <Route exact path="/examlist/:examId"                   component={ExamPagePublic}     />
                        <Route exact path="/announcementlist"                   component={AnnouncementListPagePublic}  />
                        <Route exact path="/announcementlist/:entityId"         component={AnnouncementEditPagePublic}  />
                        <Route exact path="/login"                              component={UserLoginPublic}     />
                        <Route exact path="/userlabel"                          component={UserLabel}     />
                    </Switch>
            :
            <Switch>
              <Route exact path="/teacherprofile/:entityId"                     component={TeacherEditPagePublic}  />
              <Route exact path="/courseprofile/:entityId"                      component={CourseEditPagePublic}   />
              <Route exact path="/usersregister/create"                         component={UserRegisterPage}       />
              <Route exact path="/userlabel"                                    component={UserLabel}     />
              <Route exact path="/login"                                        component={UserLoginPublic}     />
              <Route exact path="/"                                             component={Login}              />
            </Switch>
    )
  }
}

export default withRouter(App);
