import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "isomorphic-fetch";
import "es6-promise";
import Home from "./Home";
import AboutFostering from "./AboutFostering";
import FAQs from "./FAQs";
import Logo from "./Logo";
import NavBar from "./NavBar";
import AvailableFosterAnimals from "./AvailableFosterAnimals";
import FosterSignUp from "./FosterSignUp";

export default class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <div className="row">
                        <div className="col-md-6 ml-3 pt-3"> <Logo /> </div>
                        <div className="pt-3 verticalCenter"> <NavBar /> </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/aboutfostering" component={AboutFostering} />
                        <Route exact path="/availablefosteranimals" component={AvailableFosterAnimals} />
                        <Route exact path="/fostersignup" component={FosterSignUp} />
                        <Route exact path="/faqs" component={FAQs} />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}