import React, { Component } from 'react';
import "./styles.css";

export default class Home extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="text-center m-5"> This is what it looks like to foster. </h1>
                    {/* <div className="col-md-3"></div> */}
                    <img className="homepageImage" src={require("./HomePagePictures/kitten.jpg")} alt="kitten"/>
                    <img className="homepageImage" src={require("./HomePagePictures/adultCat.jpg")}  alt="adult cat"/>
                    <img className="homepageImage" src={require("./HomePagePictures/bottleFeedingKitten.jpg")}  alt="bottle feeding kitten"/>
                    <img className="homepageImage" src={require("./HomePagePictures/fourKittens.jpg")}  alt="four kittens"/>
                    <img className="homepageImage" src={require("./HomePagePictures/Hollie.jpg")}  alt="Hollie"/>
                    <img className="homepageImage" src={require("./HomePagePictures/Icy.jpg")}  alt="Icy"/>
                    <img className="homepageImage" src={require("./HomePagePictures/mommaCat.jpg")}  alt="momma cat"/>
                    <img className="homepageImage" src={require("./HomePagePictures/PrinceHarry.jpg")}  alt="Prince Harry"/>
                    <img className="homepageImage" src={require("./HomePagePictures/tabbyKitten.jpg")}  alt="tabby kitten"/>
                    <img className="homepageImage" src={require("./HomePagePictures/sevenPuppies.jpg")}  alt="seven puppies"/>

                    <img className="homepageImage" src={require("./HomePagePictures/blackAndWhitePuppy.jpg")}  alt="black and white puppy"/>
                    <img className="homepageImage" src={require("./HomePagePictures/calicoCat.jpg")}  alt="calico cat"/>
                    <img className="homepageImage" src={require("./HomePagePictures/fourBlackAndWhiteKittens.jpg")}  alt="four black and white kittens"/>
                    <img className="homepageImage" src={require("./HomePagePictures/cremeKitten.jpg")}  alt="creme colored kitten"/>
                    <img className="homepageImage" src={require("./HomePagePictures/studyKitten.jpg")}  alt="study kitten"/>
                    <img className="homepageImage" src={require("./HomePagePictures/grayKitten.jpg")}  alt="gray kitten"/>
                    <img className="homepageImage" src={require("./HomePagePictures/kittenWithTeddieBear.jpg")}  alt="kitten with teddie bear"/>
                    
                    
            </div>
        );
    }
}