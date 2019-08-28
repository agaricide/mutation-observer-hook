import React, { useRef, useState } from "react";
import useMutationObserver from "./lib/useMutationObserver";

function App() {
  const msgEl = useRef(null);
  const [message, setMessage] = useState();

  useMutationObserver(msgEl, event => {
    console.log("DOM subtree has changed!", event);
  });

  const handleClick = () => {
    setMessage("I was clicked.");
  };

  return (
    <div className="App">
      <button onClick={handleClick}>
        click me!
      </button>
      <div ref={msgEl}>{message}</div>
    </div>
  );
}

export default App;
