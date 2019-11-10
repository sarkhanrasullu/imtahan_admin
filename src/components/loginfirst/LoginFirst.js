import React, { Component } from 'react'
import UserLoginPublic from '../../scenes/login/UserLoginPublic'

export default class LoginFirst extends Component {
    render() {
        return (
            <React.Fragment>
                    <h4 className="text-center mt-5 mb-5">
                            Bu əməliyyatı yerinə yetirmək üçün ilk öncə qeydiyyatdan keçib sayta daxil olmaq lazımdır.
                    </h4>
                    <UserLoginPublic redirectUrl={this.props.redirectUrl}/>
            </React.Fragment>
        )
    }
}
