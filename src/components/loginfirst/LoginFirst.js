import React, { Component } from 'react'
import Login from '../../scenes/login/Login'

export default class LoginFirst extends Component {
    render() {
        return (
            <React.Fragment>
                    <h4 className="text-center mt-5 mb-5">
                            Bu əməliyyatı icra edə bilmək üçün ilk öncə Sayta daxil olun.
                    </h4>
                    <Login redirectUrl={this.props.redirectUrl}/>
            </React.Fragment>
        )
    }
}
