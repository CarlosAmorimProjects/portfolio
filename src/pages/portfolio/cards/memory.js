import React from 'react';
import Flippy, { FrontSide, BackSide } from './../lib';
import MemoryFront from "./../images/MemoryFront.png";
import MemoryBack from "./../images/MemoryBack.png";
import Git from "./../images/git.png";
import MemoryLogo from "./../images/Mickey.png";

const FlippyStyle = {
    backgroundColor: "#383838",
    width: '600px',
    height: '400px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center',
  }

const MemoryFlippyOnHover = ({ flipDirection = 'vertical' }) => (
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
          backgroundColor: 'white',
          alignItems: 'stretch',
          flexDirection: 'column'
        }}
      >
        <img
          src={MemoryFront} alt="memory"
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
          backgroundColor: '#DADADA',
          color: 'blue',
          textAlign: 'left'
        }}>
        <img
          src={MemoryBack} alt="memoryBack"
          style={{ maxWidth: '100%', maxHeight: '100%'}}
        />
        <span 
          style={{
            color:"white",
            fontSize:'1px',
            position: 'relative',
            bottom: '-170px',
            marginLeft: "-300px"
          }}>
          <a href="https://github.com/CarlosAmorimProjects/kids_memory_game" rel="noreferrer noopener" target="_blank"> <img src={Git} alt="git" hspace="10"/> </a>
          <a href="https://javascript-memory-game.herokuapp.com/index.html" rel="noreferrer noopener" target="_blank"> <img src={MemoryLogo} alt="logo"/> </a>
          <br />
        </span>
      </BackSide>
    </React.Fragment>);


export default MemoryFlippyOnHover;