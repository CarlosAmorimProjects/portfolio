import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserNinja, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import "./styles.css";


export default class Footer extends Component {
    render () {

    return (
        <div className="footer">

        <div className="playarrow">
            <Link to="/about" className="Link"> 
                <FontAwesomeIcon icon={faUserNinja}/>
            </Link>
        </div>

        <div className="leftarrow">
            <Link to="/contacts" className="Link"> 
               <FontAwesomeIcon icon={faChevronLeft}/>
            </Link>
        </div>
            <div className="cont">
                <p>contacts</p>    
            </div>

        <div className="rightarrow">
            <Link to="/portfolio" className="Link">
              <FontAwesomeIcon icon={faChevronRight}/>
            </Link>
        </div>
            <div className="port">
                <p>portfolio</p>    
            </div>
        </div>
    )
    }
}