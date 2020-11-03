import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDencrypt } from "use-dencrypt-effect";

import Ninja from "./../../images/front-end_ninja.png";

import "./styles.css";

const values = ["front-end", "ninja", "portfolio"];

const options= {
    chars: [ "0", "1"]
  }

const Example = () => {
  const { result, dencrypt } = useDencrypt(options);

  
  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2250);

    return () => clearInterval(action);
  }, []);

  return (
    <div className="intro">
    
      <Link to="/about" className="link">
        <h1>{result}</h1>
       </Link>

      <div className="ninja">
        <img src={Ninja} alt='ninja' />
      </div> 
    </div>
  );
};

export default Example;