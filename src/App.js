import React, { Component } from 'react';
import './App.css';

import { ParallaxProvider } from 'react-scroll-parallax';

import Heading from './Components/Heading/Heading';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Quote from './Components/Quote/Quote';
import Info from './Components/Info/Info';
import Menu from './Components/Menu/Menu';
import Gallery from './Components/Gallery/Gallery';
import Map from './Components/Map/Map';
import Partners from './Components/Partners/Partners';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <NavBar />
        <Heading />
        <ParallaxProvider>
        <About />
        </ParallaxProvider>
        <Quote />
        <Menu />
        <Gallery />
        <Partners />
        <Map/>
        <Info />
      </div>
      
      
    );
  }
}

export default App;
