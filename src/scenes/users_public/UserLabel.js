import React, { Component } from 'react';
import LoginService from '../../services/LoginService';

class UserLabel extends Component {
    service = new LoginService(this);
 
    render() {
        const loggedInUser = this.service.getLoggedInUser();
        if(!loggedInUser){
        return (
            <div className="d-sm-flex d-block">
                    <li className="nav-item d-flex justify-content-center">
                            <span className="d-flex align-items-center mx-2 top-nav-link text-blue">
                                <i className="fas fa-user mb-0 text-dark mr-2"></i>
                                    <a class="nav-link p-0 text-blue mr-1" href="/login" target="_blank">
                                        Daxil ol 
                                    </a> / 
                                    <a class="nav-link p-0 text-blue ml-1" href="https://eimtahanadmin.herokuapp.com/registration" target="_blank">
                                        Qeydiyyat
                                    </a>
                                </span>
                    </li>
            </div>
        )
        }else{
            return (
                <div className="d-sm-flex d-block">
                    <li className="nav-item d-flex justify-content-center">
                            <span className="d-flex align-items-center mx-2 top-nav-link text-blue">
                                <i className="fas fa-user mb-0 text-dark mr-2"></i>
                                <a target="_blank" href="http://eimtahan.herokuapp.com/dashboard" 
                                    class="nav-link p-0 text-blue mr-1" >
                                    {loggedInUser.name+" "+loggedInUser.surname}
                                </a>
                            </span>
                    </li>
                </div>
            )
        }
        ;
    }
}

export default UserLabel
