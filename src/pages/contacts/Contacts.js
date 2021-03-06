import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./styles.css";

import Footer from '../components/footer';

import Ninja from "./../../images/front-end_ninja.png";
import shuriken from "./../../images/shurican.png"

document.body.style.backgroundColor = "#383838";


export default function Contacts () {

    return (
      <div className="container">

            <div className="title">
                    <img src={Ninja} alt="ninja" />
            </div>

        <div className="shuriken">
            <img src={shuriken} alt="shuriken"/>
            <img src={shuriken} alt="shuriken"/>
            <img src={shuriken} alt="shuriken"/>
            <img src={shuriken} alt="shuriken"/>
            <img src={shuriken} alt="shuriken"/>
            <img src={shuriken} alt="shuriken"/>
            <img src={shuriken} alt="shuriken"/>
         </div>

        <div className="body">
            <h1>
            If you want to contact the ninja, <br/>do it at your own risk :
            </h1>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/carlos-amorim/" rel="noreferrer noopener" target="_blank" className="linkedin"> <FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="https://github.com/CarlosAmorimProjects" rel="noreferrer noopener" target="_blank" className="github"> <FontAwesomeIcon icon={faGithub}/></a>
                    <a href="mailto:carlosserraamorim@gmail.com" className="email"><FontAwesomeIcon icon={faEnvelopeSquare} className="email"/>
                    <p>carlosserraamorim@gmail.com</p>
                    </a>
                </div>
        </div>
        <Footer />
    </div>
    );
}