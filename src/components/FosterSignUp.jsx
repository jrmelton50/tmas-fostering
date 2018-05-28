import React, { Component } from 'react';

export default class FosterSignUp extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="row mt-4 mb-3">
                    <div className="col-md-4"></div>
                    <h1 className="col-md-4">Foster Sign Up</h1>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <input className="col-md-4 lightGrayBorder m-1" type="text" name="fosterName" id="fosterName" placeholder="Name" required />
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <input className="col-md-4 lightGrayBorder m-1" type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number (ex. 256-123-4567)" />
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <input className="col-md-4 lightGrayBorder m-1" type="email" name="email" id="email" placeholder="Email (ex. example@gmail.com)" />
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <h6 className="col-md-6 mt-3"> What would you like to foster? Check all that apply. </h6>
                </div>
                <div className="container row centerContent m-0">
                    <div className="col-md-2"></div>
                    <div className="signupCheckboxes">
                        <div className="leftJustify"> <label> <input id="unweanedKittens" type="checkbox" value="" /> Unweaned Kittens</label></div>
                        <div className="leftJustify"> <label> <input id="unweanedPuppies" type="checkbox" value="" /> Unweaned Puppies</label></div>
                        <div className="leftJustify"> <label> <input id="motherCatWithKittens" type="checkbox" value="" /> Mother cat with kittens</label></div>
                        <div className="leftJustify"> <label> <input id="motherDogWithPiuppies" type="checkbox" value="" /> Mother dog with puppies</label></div>
                    </div>
                    <div className="signupCheckboxes">
                        <div className="leftJustify"> <label> <input id="weanedKittens" type="checkbox" value="" /> Weaned Kittens</label></div>
                        <div className="leftJustify"> <label> <input id="weanedKittens" type="checkbox" value="" /> Weaned Puppies</label></div>
                        <div className="leftJustify"> <label> <input id="adultCat" type="checkbox" value="" /> Adult FIV+ Cat</label></div>
                        <div className="leftJustify"> <label> <input id="adultDog" type="checkbox" value="" /> Adult Dog</label></div>
                    </div>
                </div>
                <div className="container">
                    <button className="btn btn-primary col-md-2 mt-2"> Sign me up! </button>
                </div>
            </div>
        );
    }
}


// <form>
//                     <div class="row">
//                         <div class="col-sm-4"></div>
//                         <div class="checkbox col-md-3">
//                             <label> <input id="unweanedKittens" type="checkbox" value="" /> Unweaned Kittens</label>
//                         </div>
//                         <div class="checkbox col-sm-2">
//                             <label> <input id="weanedKittens" type="checkbox" value="" /> Weaned Kittens</label>
//                         </div>
//                     </div>
//                     <div class="row">
//                         <div class="col-sm-4"></div>
//                         <div class="checkbox col-sm-3">
//                             <label><input id="unweanedPuppies" type="checkbox" value="" /> Unweaned Puppies</label>
//                         </div>
//                         <div class="checkbox col-sm-2">
//                             <label> <input id="weanedKittens" type="checkbox" value="" /> Weaned Puppies</label>
//                         </div>
//                     </div>
//                     <div class="row">
//                         <div class="col-sm-4"></div>
//                         <div class="checkbox col-sm-3">
//                             <label> <input id="motherCatWithKittens" type="checkbox" value="" /> Mother cat with kittens</label>
//                         </div>
//                         <div class="checkbox col-sm-2">
//                             <label> <input id="adultCat" type="checkbox" value="" /> Adult FIV+ Cat</label>
//                         </div>
//                     </div>
//                     <div class="row smallBottomMargin">
//                         <div class="col-sm-4"></div>
//                         <div class="checkbox col-sm-3">
//                             <label> <input id="motherDogWithPiuppies" type="checkbox" value="" /> Mother dog with puppies</label>
//                         </div>
//                         <div class="checkbox col-sm-2">
//                             <label> <input id="adultDog" type="checkbox" value="" /> Adult Dog</label>
//                         </div>
//                     </div>
//                 </form>