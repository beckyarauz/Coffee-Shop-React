import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

import MenuItem from '../Menu-Item/Menu-Item';
import MenuJSON from '../../MenuJSON';

import './MenuCarousel.css';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
        items: MenuJSON,
      };
    }
  
    handleSelect(selectedIndex, e ) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
 
      const { index, direction } = this.state;

      let menuPagesArr = [];

            if(this.state.items){
              let end;
                if(window.matchMedia("(max-width: 599px)").matches){
                  end = 3;
                } else if(window.matchMedia("(min-width: 600px)").matches){
                  end = 6;
                }
                let pages = Math.ceil(this.state.items.length/end);
                let begin = 0;
                
                for(let i = 0; i < pages; i++){
                    menuPagesArr.push(
                           <div className="MenuItems">
                           {
                               this.state.items.slice(begin,end).map((item, index) => {
                                    return (
                                    <MenuItem 
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        key={index}
                                        />
                                    )
                                })
                           }
                           </div>
                       )
                   begin = end;
                   if(window.matchMedia("(max-width: 599px)").matches){
                    end += 3;
                  } else if(window.matchMedia("(min-width: 600px)").matches){
                    end += 6;
                  }
                       
                }     
       }

       let menuPages = null 
       
        menuPages = menuPagesArr.map((item,index) => {
            return (
                <Carousel.Item
                key= {index}
                >
                    {item}
                </Carousel.Item>
            )
        })
  
      return (
        <Carousel
        className="MenuCarousel"
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        >
          {menuPages}
        </Carousel>
      );
    }
  }
  
 export default ControlledCarousel;