import React, { Component } from 'react';

export default class AboutFostering extends Component {

    render() {
        return (
            <div className="container">
                <div className="centerContent m-3">
                    <h1> TMAS Foster Program </h1>
                </div>
                <h6> Foster parents must be at lease 19 years old and have time to commit to an additional dog or cat in their household. Transportaion to and from the shelter, offsite adoption events or vet visits my be required. They are expected to provide food, water, shelter, basic obedience, and a safe environment. If it easy to fall in love and get attached to an animal you are caring for daily. Emotional aspects should be considered before committing to fostering. All animals in the foster program belong to Metro Animal Shelter and procedures regarding adoption and everyday care must be followed. </h6>
                <h2 className="mt-4"> Who Needs Fostering? </h2>
                <h4 className="mt-3"> Rescue Pending: </h4>
                <h6> These are animals that have been accepted by a rescue organization and need a place to stay until their transport date: </h6>
                <ul>
                    <li> Short term (average time is 2-6 weeks) </li>
                    <li> May be required to take the animal to the vet for us </li>
                    <li> Could be any age or breed </li>
                </ul>
                <h4 className="mt-3"> Too Young to be Adopted: </h4>
                <h6> This could be any puppy or kitten under the age of 8 weeks old that are too young/small to be placed up for adoption. We receive so many unwanted litter of puppies and kittens that aren't old enough and need growth and care to place them.</h6>
                <ul>
                    <li> Length of time in foster care could range from 2-6 weeks (until the animal is old enough to place for adoption) </li>
                    <li> A visit to the shelter may be required for vaccinating or check up </li>
                </ul>
                <h4 className="mt-3"> Special Needs: </h4>
                <h6> Many animals come in scared or with minor illness. Without extra TLC and treatment, they can't be placed for adoption. We often need fosters to treat them or socialize them for us in order to make ready for adoption. Animals may be scared, sick, underweight, or just stressed.</h6>
                <ul>
                    <li> Variable commitment times depending on need of the animal </li>
                    <li> Follow up visits to the shelter may be required </li>
                    <li> This can be cats and dogs of varying ages that would benefit from time in a home </li>
                </ul>
                <h4 className="mt-3"> Foster Until Adopted: </h4>
                <h6> Space is always limited in a shelter environment. Animals that meet this criteria will remain in a fotser home until adopted. </h6>
                <ul>
                    <li> Usually long-term and an unspecified amount of time </li>
                    <li> Must make regular visits to the shelter to meet potential adopters </li>
                    <li> Animals of all types that may have been with us a while </li>
                </ul>
                <h6> This type of fostering creates space at the shelter and allows us to place additional animals into our adoption program. While in foster care, we will promote the animal on Facebook, Petfinder, and Petango </h6>
                <h4 className="mt-3"> Bringing a foster animal home: </h4>
                <h6> Our resources are very limited at the shelter. We provide supplies as availability allows. Anything we provide must be returned after foster time is up. Some costs may be required by foster. Visits to veterinary clinic on Metro's behalf must be approved through Metro. Some expenses may be too great for the shelter to reasonably provided. If so, the foster may be asked to return the animal or the foster may voluntarily cover expenses. All circumstances vary. All adoptions or transfer of pet into another home will be processed through Metro Animal Shelter. Advice and assistance is available throughout the foster process. </h6>
                <h4 className="mt-3"> Becoming a foster parent: </h4>
                <h6> Please come to the shelter to fill out an application. Because we are a small organization, animals must be placed quickly. We encourge our foster families to only foster pets that will be a good fit for their lifestyle. If we contact you and it isn't a good time, we will ask another person on the foster list. </h6>
            </div>
        );
    }
}