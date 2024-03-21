import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import React1 from "../assets/React1.jpg"
import React2 from "../assets/React2.jpg"

const Aboutcontent = () => {
  return (
    <div className="about ">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>As a fervent data science enthusiast, I'm dedicated to utilizing data to 
          solve intricate problems, enhance decision-making, and fuel innovation. 
          With an unwavering commitment to continuous learning and impactful 
          contributions,I strive to make a meaningful difference in the field.</p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React2} className="img" alt="true"/>
          </div>
          <div className="img-stack bottom">
            <img src={React1} className="img" alt="true"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent