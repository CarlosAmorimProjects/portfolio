import React from 'react';
import Flippy, { FrontSide, BackSide } from './../lib';
import YouAPIFront from "./../images/youtube.png";
import YouAPIBack from "./../images/youtubeBack.png";
import Git from "./../images/git.png";
import Logo from "./../images/youtubeLogo.png";


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
          backgroundColor: '#EDEDED',
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column'
        }}
      >
        <img
          src={YouAPIFront} alt="despesismo"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit:"cover"}}
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
          backgroundColor: '#545454',
          textAlign:"left"
        }}>
        <img
          src={YouAPIBack} alt="despesismo"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit:"cover"}}
        />
        <span 
          style={{
            color:"white",
            fontSize:'1px',
            position: 'relative',
            bottom: '-180px',
            marginLeft: "-300px",
          }}>
          <a href="https://github.com/CarlosAmorimProjects/Youtube_API" rel="noreferrer noopener" target="_blank"> <img src={Git} alt="Be" hspace="10"/> </a>
          <a href="https://youtube-api-search-title.herokuapp.com/index.html" rel="noreferrer noopener" target="_blank"> <img src={Logo} alt="Be"/> </a>
        </span>
      </BackSide>
    </React.Fragment>);
  
  const YouAPIFlippyOnHover = ({ flipDirection = 'vertical' }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <CardContents>
      I flip {flipDirection}ly on hover
      </CardContents>
    </Flippy>
  );

  export default YouAPIFlippyOnHover;