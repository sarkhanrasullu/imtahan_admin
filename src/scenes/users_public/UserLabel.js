import React, { Component } from 'react';
import LoginService from '../../services/LoginService';

class UserLabel extends Component {
    service = new LoginService(this);
 
    render() {
        const loggedInUser = this.service.getLoggedInUser();
        if(!loggedInUser){
        return (
            <div className="d-flex d-block">
                    <li className="nav-item d-flex justify-content-center">
                            <span className="d-flex align-items-center mx-2 top-nav-link text-dark">
                                <i className="fas fa-user mb-0 text-dark mr-2"></i>
                                    <a class="nav-link p-0 text-dark mr-1" href="http://www.imtahanlar.az/signin" target="_blank">
                                        Daxil ol 
                                    </a> / 
                                    <a class="nav-link p-0 text-dark ml-1" href="http://www.imtahanlar.az/registration" target="_blank" rel="noopener noreferrer">
                                        Qeydiyyat
                                    </a>
                                </span>
                    </li>
            </div>
        )
        }else{
            return (
                <div className="d-flex d-block">
                    <li className="nav-item d-flex justify-content-center">
                            <span className="d-flex align-items-center mx-2 top-nav-link text-black">
                                <i className="fas fa-user mb-0 text-dark mr-2"></i>
                                <a  target="_blank" 
                                    href="https://www.imtahanlar.az/dashboard" 
                                    rel="noopener noreferrer"
                                    class="nav-link p-0 mr-1 text-dark" >
                                    {loggedInUser.name+" "+loggedInUser.surname}
                                </a>
                            </span>
                    </li>
                    <li className="nav-item d-flex justify-content-center" 
                        style={{cursor:'pointer'}}
                    onClick={() => this.service.logout('/userlabel')}>
                            <span className="d-flex align-items-center mx-2 top-nav-link text-blue">
                                <i className="fas fa-sign-out-alt mb-0 text-dark mr-2"></i>
                                    Çıxış et
                            </span>
                    </li>
                </div>
            )
        }
        ;
    }
}

export default UserLabel
