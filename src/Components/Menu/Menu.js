import React, { Component } from 'react';
import './Menu.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxBanner from '../ParallaxBanner/ParallaxHero';


import MenuCarousel from './Components/MenuCarousel/MenuCarousel';

class Menu extends Component {

    render(){
        
        return (
            <ParallaxProvider>
                <div className="Menu" id="Menu">
                    <ParallaxBanner
                            className="Menu-Banner"
                            min={'-90%'}
                            max={'90%'}
                            image="https://farm5.staticflickr.com/4806/45151987575_015a4793be_b.jpg"
                            >
                        <div className="Menu-Title">
                            <h1>Menu</h1>
                        </div>
                        <MenuCarousel />
                    </ParallaxBanner>
                </div>
            </ParallaxProvider>
        );
    }
}

export default Menu;