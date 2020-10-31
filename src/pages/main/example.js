import React from "react";
import { useDencrypt } from "use-dencrypt-effect";

import "./styles.css";

const values = ["front-end", "ninja", "portfolio"];

const options= {
    chars: ["_"]
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

  return <h1>{result}</h1>;
};

export default Example;