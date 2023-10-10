import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.less";

class MyLibrary {
  render(rootElementId: string) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById(rootElementId)
    );
  }
}

export default MyLibrary;
