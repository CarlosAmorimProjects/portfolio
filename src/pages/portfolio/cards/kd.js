import React from 'react';
import Flippy, { FrontSide, BackSide } from './../lib';
import KDFront from "./../images/KDFront.png";
import KDBack from "./../images/KDBack.png";
import Git from "./../images/git.png";
import Logo from "./../images/KDlogo.png";


const FlippyStyle = {
  backgroundColor: "#383838",
    width: '600px',
    height: '400px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center',
  }

const KDFlippyOnHover = ({ flipDirection = 'vertical' }) => (
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
          backgroundColor: '#F8F9FA',
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column'
        }}
      >
        <img
          src={KDFront} alt="hero"
          style={{ maxWidth: '100%', maxHeight: '110%', marginTop:"30px"}}
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
          backgroundColor: '#1D1D1D',
          color: 'blue',
          textAlign: 'left'
        }}>
        <img
          src={KDBack} alt="hero"
          style={{ maxWidth: '100%', maxHeight: '100%', marginTop:"30px"}}
        />
        <span 
          style={{
            color:"white",
            fontSize:'1px',
            position: 'relative',
            bottom: '-180px',
            marginLeft: "-300px",
            border:"5px",
          }}>
          <a href="https://github.com/CarlosAmorimProjects/kd-arch" rel="noreferrer noopener" target="_blank"> <img src={Git} alt="git" hspace="10"/> </a>
          <a href="http://www.kd-arch.pt/" rel="noreferrer noopener" target="_blank"> <img src={Logo} alt="logo" /> </a>
          <br />
        </span>
      </BackSide>
    </React.Fragment>);


export default KDFlippyOnHover;