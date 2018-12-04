import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Heading.css'
import logo from './logo.svg';

import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxBanner from '../ParallaxBanner/ParallaxHero';

class Heading extends Component {
    render(){
        return (
            <ParallaxProvider>
            <div className="Heading">
            <div className="Heading-Logo">
            <ParallaxBanner
            className="Heading-Logo"
                    min={'-70%'}
                    max={'70%'}
                    image="https://farm5.staticflickr.com/4849/31124890547_6ccf3f0a1f_b.jpg"
                    >
                    <img className="Logo" src={logo} alt="" />
                    <p className="Slogan">Fairer Kaffee. Feine Kost</p>
            </ParallaxBanner>
                
            </div>
            </div>
            </ParallaxProvider>
        );
    }
}

const element = <Heading />;

ReactDOM.render(
    element,
    document.getElementById('root')
  );

export default Heading;