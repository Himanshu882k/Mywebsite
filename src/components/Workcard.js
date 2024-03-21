import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaGithub, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./WorkCardStyles.css";

const Workcard = () => {
  const [currentContainer, setCurrentContainer] = useState(1);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    setFlip(true);
    const timer = setTimeout(() => setFlip(false), 500); // Remove the flip class after 0.5s
    return () => clearTimeout(timer); // Clean up the timer
  }, [currentContainer]); // Run this effect whenever currentContainer changes

  const handleNext = () => {
    setCurrentContainer(currentContainer % 3 + 1);
  }

  const handlePrevious = () => {
    setCurrentContainer((currentContainer - 2) % 3 + 1);
  }

  return (
    <div className={`work-container ${flip ? "flip" : ""}`}>
            {currentContainer === 1 && (
                <div className="project-container1">
                    <div className="project-1">
                        <FaGithub size={80} style={{ color: "#fff" }} />
                        <h2 className="pro-title">Customer Churn Analysis</h2>
                        <div className="pro-details">
                            <p>
                                This project is about predicting whether a telecom company’s customers will continue using their services or not. It uses customer data to estimate the likelihood of a customer leaving (or “churning”). The aim is to help the company retain more customers by understanding and addressing the factors that lead to churn.
                            </p>
                            <div className="pro-buttons">
                                <NavLink to="https://github.com/Himanshu882k/customer-churn">View</NavLink>
                            </div>
                        </div>
                        <div className="navigation-buttons">
                            <FaArrowLeft onClick={handlePrevious} style={{ color: "#fff", fontSize: "2em" }} />
                            <FaArrowRight onClick={handleNext} style={{ color: "#fff", fontSize: "2em" }} />
                        </div>
                    </div>
                </div>
            )}
            {currentContainer === 2 && (
                <div className="project-container1">
                    <div className="project-1">
                        <FaGithub size={80} style={{ color: "#fff" }} />
                        <h2 className="pro-title">Toxic comment analysis</h2>
                        <div className="pro-details">
                            <p>
                                This project involves the classification of Twitter comments into various categories of toxic behavior, including toxic, severe toxic, obscene, threat, insult, and identity hate. The primary objective is to perform sentiment analysis on these comments to understand their impact and type.
                            </p>
                            <div className="pro-buttons">
                                <NavLink to="https://github.com/Himanshu882k/Toxic_comment_classification">View</NavLink>
                            </div>
                        </div>
                        <div className="navigation-buttons">
                            <FaArrowLeft onClick={handlePrevious} style={{ color: "#fff", fontSize: "2em" }} />
                            <FaArrowRight onClick={handleNext} style={{ color: "#fff", fontSize: "2em" }} />
                        </div>
                    </div>
                </div>
            )}
            {currentContainer === 3 && (
                <div className="project-container1">
                    <div className="project-1">
                        <FaGithub size={80} style={{ color: "#fff" }} />
                        <h2 className="pro-title">Co2 Emission</h2>
                        <div className="pro-details">
                            <p>This project aims to develop a predictive model for CO2 emissions based on various car engine features. The primary objective is to understand the relationship between these engine characteristics and their impact on CO2 emissions.                      </p>
                            <div className="pro-buttons">
                                <NavLink to="https://github.com/Himanshu882k/Co2emission">View</NavLink>
                            </div>
                        </div>
                        <div className="navigation-buttons">
                            <FaArrowLeft onClick={handlePrevious} style={{ color: "#fff", fontSize: "2em" }} />
                            <FaArrowRight onClick={handleNext} style={{ color: "#fff", fontSize: "2em" }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    
    )
}

export default Workcard
