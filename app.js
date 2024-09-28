// ====Nested ==
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id: "parent"}, 
[React.createElement("div", {id: "child1"},
[React.createElement("h1",{},"Im an h1 tag"), 
React.createElement("h1",{}, "Radhe Radhe")]),
React.createElement("div",{id: "child2"},
[React.createElement("h1",{},"Im an h1 tag"), 
React.createElement("h1",{}, "Radhe Radhe")]
)] 
)

const heading = React.createElement("h1",{id: "heading"},"Radhe Radhe");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);