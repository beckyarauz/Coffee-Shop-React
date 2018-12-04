import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

import images from '../../GalleryJSON';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
        images: images,
      };
    }
  
    handleSelect(selectedIndex, e ) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
 
      const images  = this.state.images;

      let carouselImages = images.map((item,index) => {
        return (
          <Carousel.Item
          key = {index}
          >
            <img alt={'pictureCoffee' + index} src={item} />
          </Carousel.Item>
        )
      })
  
      return (
        <Carousel
        controls={false}
        indicators={false}
        interval={2000}
        >
          {carouselImages}
        </Carousel>
      );
    }
  }
  
 export default ControlledCarousel;