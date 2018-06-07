import React, { Component } from 'react';

export default class FAQs extends Component {

    render() {
        return (
            <div className="container">
                <div className="centerContent m-3">
                    <h1> Frequently Asked Questions </h1>
                </div>
                <h4> Question: Will the shelter provide everything I need to foster? </h4>
                <h4> Answer: The shelter will provide food and medical care as long as the funds are available. </h4>
                <br/>
                <h4> Question: How long will I need to foster? </h4>
                <h4> Answer: The duration of the foster care time, will depend on the animal's needs. </h4>
                <br/>
                <h4> Question: What do I do if there is an emergency and the animal needs immediate vet care? </h4>
                <h4> Answer: The shelter has vet techs on site and will be able to care for the kitten accordingly. If you decide to take the animal to a vet, that cost is on you. </h4>
                <br/>
                <h4> Question: Can I give my foster animal Benadryl to help with coughing? </h4>
                <h4> Answer: Do not medicate the foster animal without the shelter's (or a vet's) permission. </h4>
            </div>
        );
    }
}