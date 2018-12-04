import React, { Component } from 'react';
import './Partners.css';

import flyingIMG from './images/Flying-Roasters-logo.png'
import quijoteIMG from './images/quijote-logo.png'
import ridersIMG from './images/riders-logo.png'

class Partners extends Component {
    render(){
        return (
            <div className="Partners" id="Partners">
            <h1>Mit Wem?</h1>
            <div className="PartnerItems">
                <img className="PartnersLogos fly" src={flyingIMG} alt="Flying Roaster Logo"/>
                <img className="PartnersLogos quijote" src={quijoteIMG} alt="Flying Roaster Logo"/>
                <img className="PartnersLogos riders" src={ridersIMG} alt="Flying Roaster Logo"/>
            </div>
            </div>
        );
    }
}

export default Partners;