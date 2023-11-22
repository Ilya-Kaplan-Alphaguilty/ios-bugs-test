import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const inputRef = React.useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>Without on touch start</h1>
        <input type="text" name="test" id="test" />
        <button onClick={() => alert("Clicked")}>test</button>

        <h1>With on touch start</h1>
        <input
          type="text"
          name="test1"
          id="test1"
          onTouchStart={(e) => {
            if (
              !(
                navigator?.userAgent?.toLowerCase()?.includes("safari") &&
                navigator?.userAgent?.toLowerCase()?.includes("iphone")
              )
            ) {
              return;
            }

            inputRef.current.focus();
          }}
        />
        <button
          onClick={(e) => {
            if (
              navigator?.userAgent?.toLowerCase()?.includes("safari") &&
              navigator?.userAgent?.toLowerCase()?.includes("iphone")
            ) {
              return;
            }

            alert("Clicked");
          }}
          onTouchStart={(e) => {
            if (
              !(
                navigator?.userAgent?.toLowerCase()?.includes("safari") &&
                navigator?.userAgent?.toLowerCase()?.includes("iphone")
              )
            ) {
              return;
            }

            alert("Clicked");
          }}
        >
          test
        </button>
      </header>
    </div>
  );
}

export default App;
