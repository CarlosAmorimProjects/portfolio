import React, { Component } from "react";
import "./styles.css";
import Typical from 'react-typical'

import Footer from '../components/footer';

import Ninja from "./../../images/front-end_ninja.png";

document.body.style.backgroundColor = "#383838";


const steps = [
    'Hello 👋', 300,
    'I am Carlos Amorim 👨', 300,
    'I have a Degree in Computer Engineering 🎓', 200,
    'I am a frontend web developer  🖥', 300,
    ' ', 5000,
    'Still there? 🧘‍♀️', 300,
    'Want to know more? 😎', 300,
    'Check out my portfolio or contacts page 📫', 1500,
    ' ', 3000,
    'Really? 😂', 1000,
    'Waiting for something else?', 1000,
    ' ', 1000,
  ];
  export default class About extends Component {
    render () {
      return (
        <div className="body">
          <img src={Ninja} alt="ninja"/>
          <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
          <Footer />
        </div>
      )
    }
  }