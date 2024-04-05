import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import LoginBackground from "../components/LoginBackground";
import Register from "../components/RegisterComponent";


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="row col-12">
                <div className="col-7 p-0">
                    <LoginBackground />
                </div>
                <div className="col-5 p-0">
                    <LoginComponent />
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage);