import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuidv4} from "uuid";
import { config } from "react-spring";
import carousel1 from '../Assets/carousel1.svg'
import carousel2 from '../Assets/carousel2.svg'
import carousel3 from '../Assets/carousel3.svg'

export default class Homecarousel extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src={carousel1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={carousel2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={carousel3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={carousel1} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={carousel2} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={carousel3} alt="6" />
    }

  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });


  render() {
    return (
      <div style={{ width: "45%", height: "500px", margin: "0 auto", float: "right", marginRight: 50, marginTop: -650 }}>
        <Carousel
          slides={this.slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div className="button1"></div>
        <div className="button2"></div>
 
      </div>
      
    );
  }
}