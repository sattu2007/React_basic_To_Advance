// ====Nested ==
import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",{id: "heading"}, "Satyam Tiwari"); 


const title =(
<h1 id= "heading">Ract</h1>
)


const HeadingComponent =  () =>(
     <>
     {title}
     <h1>Radhe Radhe</h1>
     </>
)




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/> );