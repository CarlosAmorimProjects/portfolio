import React from 'react';
import Flippy, { FrontSide, BackSide } from './../lib';
import DespesismoFront from "./../images/despesismo.png";
import DespesismoBack from "./../images/despesismoBack.png";
import Git from "./../images/git.png";
import Logo from "./../images/despesismoLogo.png";


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
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column'
        }}
      >
        <img
          src={DespesismoFront} alt="despesismo"
          style={{ maxWidth: '100%', maxHeight: '100%'}}
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
          backgroundColor: '#ABABAB',
          color: 'blue',
          textAlign: 'left'
        }}>
        <img
          src={DespesismoBack} alt="despesismo"
          style={{ maxWidth: '100%', maxHeight: '100%'}}
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
          <a href="https://github.com/CarlosAmorimProjects/Despesismo" rel="noreferrer noopener" target="_blank"> <img src={Git} alt="Be" hspace="10" /> </a>
          <a href="https://despesismo.herokuapp.com/" rel="noreferrer noopener" target="_blank"> <img src={Logo} alt="Be"/> </a>
          <br />
        </span>
      </BackSide>
      
    </React.Fragment>);
  
  const DespesismoFlippyOnHover = ({ flipDirection = 'vertical' }) => (
    <Flippy
      flipOnHover={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <CardContents>
      </CardContents>
    </Flippy>
  );

  export default DespesismoFlippyOnHover;