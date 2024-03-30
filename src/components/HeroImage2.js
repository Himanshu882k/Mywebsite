import "./HeroImage2Styles.css"

import React, { Component } from 'react'

class HeroImage2 extends Component{
  render(){
    return ( 
      <div className="hero-img">
        <div className="heading"> 
        <style>
          @import url(''https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap'');
        </style>
          <h1 style={{ fontFamily: 'Exo 2, sans-serif' }}>
            {this.props.heading}
          </h1>
          <p style={{ fontFamily: 'Dosis, sans-serif' }}>
            {this.props.text}
          </p>
        </div>
      </div>
    );
  }
}

export default HeroImage2