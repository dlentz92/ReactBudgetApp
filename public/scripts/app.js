"use strict";

console.log("app.js is running");

// jsx 
var template = React.createElement(
  "h1",
  null,
  "Does this change"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
