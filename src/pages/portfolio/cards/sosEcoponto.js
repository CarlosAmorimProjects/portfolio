import React from 'react';
import Flippy, { FrontSide, BackSide } from './../lib';
import SosFront from "./../images/SosFront.png";
import SosBack from "./../images/SosBack.png";
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

const SOSFlippyOnHover = ({ flipDirection = 'vertical' }) => (
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
          backgroundColor: '#cacad1',
          alignItems: 'stretch',
          flexDirection: 'column'
        }}
      >
        <img
          src={SosFront} alt="hero"
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
          backgroundColor: '#8b8b8e',
          color: 'blue',
          textAlign: 'left',
        }}>
        <img
          src={SosBack} alt="hero"
          style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: '65px'}}
        />
        <span 
          style={{
            color:"white",
            fontSize:'4px',
            position:"relative",
            marginLeft:"270px",
            bottom:"15px",
          }}>
          <a href="https://github.com/CarlosAmorimProjects/SOS_Ecoponto" rel="noreferrer noopener" target="_blank"> <img src={Git} alt="Be" /> </a>
          <br />
        </span>
      </BackSide>
    </React.Fragment>);


export default SOSFlippyOnHover;