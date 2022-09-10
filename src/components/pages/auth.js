import React, {Component} from "react";
import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component{
    render(){
        return(
            <div className="auth-page-wrapper">
                <div 
                    className="left-colomn"
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                <div className="right-colomn">
                    <Login />
                </div>
            </div>
        );

    }
}