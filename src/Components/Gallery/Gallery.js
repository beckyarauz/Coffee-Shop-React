import React, { Component } from 'react';
import './Gallery.css'

import GalleryCarousel from './Components/GalleryCarousel/GalleryCarousel'

class Gallery extends Component {
    render(){
        return (
            <div className="Gallery" id="Gallery">
                 <GalleryCarousel/>
            </div>
        );
    }
}

export default Gallery;