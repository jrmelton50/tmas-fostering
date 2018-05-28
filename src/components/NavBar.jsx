import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeLink: "home"
        }
    }

    handleLinkSelection(target) {
        // console.log("target = ", target);
        // target.removeClass("active");
        // this.setState({
        //     activeLink: target.id
        // });
        // target.addClass("active");
    }

    render() {
        return (
            <React.Fragment>
                <ul className="nav nav-pills justify-content-end">
                    <li className="nav-item">
                        {/* <Link id="home" className="nav-link" to="/" onClick={(event) => $(this).css('color', 'red')}> Home </Link> */}
                        <Link id="home" className="nav-link" to="/" onClick={(event) => this.handleLinkSelection(event.target)}> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutfostering" onClick={(event) => this.handleLinkSelection(event.target)}> About Fostering </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/availablefosteranimals" onClick={(event) => this.handleLinkSelection(event.target)}> Available Foster Animals </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/fostersignup" onClick={(event) => this.handleLinkSelection(event.target)}> Foster Sign Up </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/faqs" onClick={(event) => this.handleLinkSelection(event.target)}> FAQs </Link>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}