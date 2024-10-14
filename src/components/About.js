import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <h2>Radhe Radhe</h2>
            <User/>

            <UserClass name ={"Satyam Tiwari (class)"} location ={"Punjab (class)"}/>
        </div>
    )
}

export default About;