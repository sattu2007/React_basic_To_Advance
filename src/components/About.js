import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);
        console.log("parent constracter");
    }


    componentDidMount(){
        console.log("parent component did mount");
    }

    render(){
        console.log("parent render");
        return(
            <div>
                <h1>About</h1>
                <h2>Radhe Radhe</h2>
                <UserClass name ={"Satyam Tiwari (class)"} location ={"Punjab (class)"}/>
            </div>
        )
    }
}


export default About;