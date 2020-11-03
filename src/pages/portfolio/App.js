import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import HeroFlippyOnHover from './cards/hero';
import DespesismoFlippyOnHover from './cards/despesismo';
import YouAPIFlippyOnHover from "./cards/youAPI";
import MemoryFlippyOnHover from './cards/memory';
import KDFlippyOnHover from "./cards/kd";
import TTSFlippyOnHover from "./cards/tts";
import SOSFlippyOnHover from "./cards/sosEcoponto";
import ChatFlippyOnHover from "./cards/chatBot";

import Footer from '../components/footer';

import Ninja from "./images/front-end_ninja.png";

document.body.style.backgroundColor = "#383838";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
             <div className="title">
             <img src={Ninja} alt="ninja" />
                <p>front-end developer portfolio</p>
             </div>
               <div className="subtitle">
                 <h3>
                    <u>These are some of my latest web development projects, developed
                    using mostly Javascript, ReactJS, HTML5 and CSS.</u>
                 </h3>
               </div>
              
               <div className="card">
                  <SOSFlippyOnHover />
              </div>
              <div className="card">
                  <ChatFlippyOnHover flipDirection="horizontal" />
              </div>
              <div className="card">
                  <HeroFlippyOnHover flipDirection="horizontal"/>
              </div>
              <div className="card">
                  <TTSFlippyOnHover />
              </div>
              <div className="card">
                   <MemoryFlippyOnHover />
              </div>
              <div className="card">
                  <YouAPIFlippyOnHover flipDirection="horizontal"/>
              </div>
              <div className="card">
                  <KDFlippyOnHover flipDirection="horizontal"/>
              </div>
              <div className="card">
              <DespesismoFlippyOnHover />
            </div>
            <Footer />
      </div>
      
    );
  }
}

export default App;
