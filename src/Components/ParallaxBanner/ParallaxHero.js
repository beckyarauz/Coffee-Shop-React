import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './ParallaxBanner.css';


const ParallaxBanner = ({ image, min, max, children }) => (
    <div className="banner-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
            <div
                className="banner-image"
                style={{ backgroundImage: `url(${image})` }}
            />
        </Parallax>
        <div className="banner-children">{children}</div>
    </div>
);

export default ParallaxBanner;