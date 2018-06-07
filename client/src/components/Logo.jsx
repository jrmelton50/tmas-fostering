import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <Link id="home" className="nav-link" to="/"> <img src={require("./logo.png")} alt="TMAS"/> </Link>
            </React.Fragment>
        );
    }
}