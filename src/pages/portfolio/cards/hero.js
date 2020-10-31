import React from 'react';
import Flippy, { FrontSide, BackSide } from './../lib';
import HeroFront from "./../images/everyday_hero (4).png";
import HeroBack from "./../images/hero2.png";
import Git from "./../images/git.png";

const FlippyStyle = {
    backgroundColor: "#383838",
    width: '600px',
    height: '400px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center',
  }

const HeroFlippyOnHover = ({ flipDirection = 'vertical' }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <CardContents>
      </CardContents>
    </Flippy>
  );

const CardContents = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#f0f0f5',
          alignItems: 'stretch',
          flexDirection: 'column'
        }}
      >
        <img
          src={HeroFront} alt="hero"
          style={{ maxWidth: '100%', maxHeight: '100%'}}
        />
        <span 
          style={{
            color: "black",
            fontSize:'25px',
            position: 'relative',
            bottom: '250px',
            width: '100%'
          }}>
          <br />
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#A1A1A7',
          color: 'blue',
          textAlign: 'left'
        }}>
        <img
          src={HeroBack} alt="hero"
          style={{ maxWidth: '100%', maxHeight: '100%'}}
        />
        <span 
          style={{
            color:"white",
            fontSize:'4px',
            position:"relative",
            marginLeft:"270px",
            bottom:"-60px",
          }}>
          <a href="https://github.com/CarlosAmorimProjects/Everyday_Hero" rel="noreferrer noopener" target="_blank"> <img src={Git} alt="Be" /> </a>
          <br />
        </span>
      </BackSide>
    </React.Fragment>);


export default HeroFlippyOnHover;