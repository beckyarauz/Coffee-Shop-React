
import React, {Component} from 'react';
// import mapexample from '../../images/map-example.PNG';
import './Map.css';

class Map extends Component {
    render(){
        return (
            <div className="Map" id="Map">
            <iframe title="MapLink" className="MapLink" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19442.651250298743!2d13.321824!3d52.473135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7177f67d9c0767b4!2swild+caff%C3%A8!5e0!3m2!1sde!2sus!4v1543937031005" allowFullScreen></iframe>
            </div>
        );
    }
}

// AIzaSyDD4geO9acLAOz4HTsnzTGwEa9ZgHy9wrg

export default Map;

