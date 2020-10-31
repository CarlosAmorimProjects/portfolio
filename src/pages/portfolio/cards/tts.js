import React from 'react';
import Flippy, { FrontSide, BackSide } from '../lib';
import TTSFront from "./../images/TTSFront.png";
import TTSBack from "./../images/TTSBack.png";
import Git from "./../images/git.png";
import Logo from "./../images/TTSLogo.png";


const FlippyStyle = {
  backgroundColor: "#383838",
    width: '600px',
    height: '400px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
  }
  
  
  const CardContents = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#808080',
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column'
        }}
      >
        <img
          src={TTSFront} alt="despesismo"
          style={{ maxWidth: '75%', maxHeight: '100%', marginLeft:"90px"}}
        />
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#444444',
          color: 'blue',
          textAlign: 'left'
        }}>
        <img
          src={TTSBack} alt="despesismo"
          style={{ maxWidth: '100%', maxHeight: '100%', marginLeft:"80px"}}
        />
        <span 
          style={{
            color:"white",
            fontSize:'1px',
            position: 'relative',
            bottom: '-151px',
            marginLeft: "-270px",
            border:"5px"
          }}>
          <a href="https://github.com/CarlosAmorimProjects/TTS-Full" rel="noreferrer noopener" target="_blank"> <img src={Git} alt="Be" hspace="10" /> </a>
          <a href="https://tts-fullstack-app.herokuapp.com/" rel="noreferrer noopener" target="_blank"> <img src={Logo} alt="Be"/> </a>
          <br />
        </span>
      </BackSide>
      
    </React.Fragment>);
  
const TTSFlippyOnHover = ({ flipDirection = 'vertical' }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <CardContents>
      </CardContents>
    </Flippy>
  );

  export default TTSFlippyOnHover;