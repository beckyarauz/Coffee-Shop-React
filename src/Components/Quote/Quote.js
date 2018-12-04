import React, { Component } from 'react';
import './Quote.css';

import images from './imagesJSON';

class Quote extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.state = {
          images: images,
        };
      }
    render(){
        return (
            <div className="Quote" id="Quote">
                <div className="Quote-Banner">
                    <div className="QuoteTextContainer">
                        <p>„So lange ich mir Zeit lassen kann,ist alles gut.“</p>
                        <div className="Author">- Attilio Bosco</div>
                    </div>
                </div>
                <img id="sorrento" src={this.state.images[0]} alt="sorrento"/>
            </div>
        );
    }
}

export default Quote;