import React, { useRef, useState } from "react";

function App() {
  const btnEl = useRef(null);
  const [btnText, setBtnText] = useState("click me!");

  const handleClick = () => {
    setBtnText("I was clicked.");
  };

  return (
    <div className="App">
      <button ref={btnEl} onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
}

export default App;
