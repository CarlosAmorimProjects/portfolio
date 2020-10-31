import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserNinja, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "./styles.css";
import Typical from 'react-typical'

import Ninja from "./../../images/front-end_ninja.png";

document.body.style.backgroundColor = "#383838";


const steps = [
    'Hello 👋', 300,
    'I am Carlos Amorim 👨', 300,
    'I am a front-end developer 🖥' , 300,
    'I have a Degree in Computer Engineering 🎓', 200,
    'I like to cook 🍱', 300,
    'I like running 🏃🏻‍♂️', 300,
    'I like to read 📜', 300,
    ' ', 5000,
    'Still there? 🧘‍♀️', 300,
    'Want to know more? 😎', 300,
    'Check out my portfolio or contacts page 📫', 1500,
    ' ', 3000,
    'Really? 😂', 1000,
    ' ', 1000,
  ];
  export default class About extends Component {
    render () {
      return (
        <div className="body">
          <img src={Ninja} alt="ninja"/>
          <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
        
                <div className="playarrow">
                    <Link to="/" className="Link"> 
                        <FontAwesomeIcon icon={faUserNinja}/>
                    </Link>
                </div>

                <div className="leftarrow">
                    <Link to="/contacts" className="Link"> 
                       <FontAwesomeIcon icon={faChevronLeft}/>
                    </Link>
                </div>

                <div className="rightarrow">
                    <Link to="/portfolio" className="Link">
                      <FontAwesomeIcon icon={faChevronRight}/>
                    </Link>
                </div>
        </div>
      )
    }
  }