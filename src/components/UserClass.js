import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dammy",
                type: "Null",
            }
            
        }
         console.log(this.props.name+"child constracter");
    
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/aman")
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
        console.log(this.props.name+"child component did mount");
    }

    componentDidUpdate(){
        console.log("component updat");
    }

    componentWillUnmount(){};


    render(){
        console.log(this.props.name+"child Render");
        return (
            <div className="user-card">
                <h2>Name: Satyam</h2>
                <h3>Contact Us: tiwarisatyam@gamil.com</h3>
            </div>
        ) 
    }
} 

export default UserClass;