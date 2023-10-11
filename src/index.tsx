import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "core-js/stable/array/includes";
import "core-js/stable/array/from";
import "core-js/stable/array/find";
import "core-js/stable/string/includes";
import "core-js/stable/string/starts-with";
import "core-js/stable/promise";
import "core-js/stable/object/assign";

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
