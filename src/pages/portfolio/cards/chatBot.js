import React from 'react';
import Flippy, { FrontSide, BackSide } from '../lib';
import ChatFront from "./../images/chatFront.png";
import ChatBack from "./../images/chatBack.png";
import Git from "./../images/git.png";


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
          backgroundColor: '#df9557',
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column'
        }}
      >
        <img
          src={ChatFront} alt="despesismo"
          style={{ maxWidth: '100%', maxHeight: '100%', marginLeft:"0px"}}
        />
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%',
          }}>
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#2a2c2e',
          color: 'blue',
          textAlign: 'left'
        }}>
        <img
          src={ChatBack} alt="despesismo"
          style={{ maxWidth: '100%', maxHeight: '100%', marginLeft:"0px", 
          marginTop: '30px'}}
        />
        <span 
          style={{
            color:"white",
            fontSize:'1px',
            position: 'relative',
            bottom: '1px',
            marginLeft: "250px",
            border:"5px"
          }}>
          <a href="https://github.com/CarlosAmorimProjects/Chat_Bot" rel="noreferrer noopener" target="_blank"> <img src={Git} alt="Be" hspace="10" /> </a>
          <br />
        </span>
      </BackSide>
      
    </React.Fragment>);
  
const ChatFlippyOnHover = ({ flipDirection = 'vertical' }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <CardContents>
      </CardContents>
    </Flippy>
  );

  export default ChatFlippyOnHover;