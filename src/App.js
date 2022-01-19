import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header.js';
import Featured from './components/featured/index.js';
import VenueInfo from './components/venueInfo/index.js';
import Highlight from './components/highlights/index.js';
import Pricing from './components/pricing/index.js';
import Location from './components/location/index.js';
import Footer from './components/header_footer/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>
        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venueInfo">
          <VenueInfo/>
        </Element>

        <Element name="highlight">
          <Highlight/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>

        <Footer/>
      </div>
    );
  };
}

export default App;
