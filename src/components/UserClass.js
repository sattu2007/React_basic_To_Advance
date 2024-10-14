import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 1,
        }
        console.log("child constracter");
    
    }

    componentDidMount(){
        console.log("child component did mount");
    }


    render(){
        console.log("child constracter");
        const{count} = this.state;
        const{name,location} = this.props;
        return (
            <div className="user-card">
                <h1>Count: = {count}</h1>
                <button onClick={() =>{
                    this.setState({
                        count:  this.state.count+1,
                    })
                }}>Increse</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact Us: tiwarisatyam@gamil.com</h3>
            </div>
        ) 
    }
} 

export default UserClass;