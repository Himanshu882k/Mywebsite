import "./FooterStyle.css";
import { FaPhone, FaGithub, FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa';

import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Kalpataru Plaza, Khopoli</p>
                            <p>Maharashtra, India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>< FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +917887972649</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            himanshusachan91866@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4 className="social" >My Socials</h4>
                    <div className="icons-container">
                        <a href="https://www.linkedin.com/in/himanshu-sachan-814483214/">
                            <FaLinkedin size={40} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://github.com/Himanshu882k">
                            <FaGithub size={40} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer