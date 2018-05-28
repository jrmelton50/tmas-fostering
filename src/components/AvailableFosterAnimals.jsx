import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles.css";

export default class AvailableFosterAnimals extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card cardWidth m-5">
                    <img className="card-img-top cardImage" src={require("./AnimalsThatNeedFosteringPictures/mommaAndBaby.jpg")} alt="mother cat with kitten"/>
                        <div className="card-body">
                            <h5 className="card-title">Mother cat with kitten</h5>
                            <p className="card-text"> The mother cat will need to be fostered while the kitten nurses (or until May 18th, 2018) and the kitten would need to be fostered until June 1st, 2018.</p>
                            <Link className="btn btn-primary" to="/fostersignup"> I want to foster! </Link>
                        </div>
                </div>
            </React.Fragment>
        );
    }   
}