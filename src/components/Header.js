import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOfflineStatus from "../utils/useOfflineStatus";
const Header = () =>{
     const [btnNameReact,setbtnNameReact]  = useState("Login");
     const onlineStatus = useOfflineStatus();
    return(
         <div className="header">
              <div className="logo-container">
                   <img className="logo"
                   src={LOGO_URL}/>
              </div>
              <div className="nav-items">
                   <ul>
                    <li>Oline Status: {onlineStatus ? "✅" : "🔴"}</li>
                        <li>
                         <Link to ="/">Home</Link></li>
                        <li>
                         <Link to = "/about">About Us</Link></li>
                        <li>
                         <Link to="/contact">Contact</Link></li>
                         <li>
                         <Link to="/Grocery">Grocery</Link></li>
                         <li>Card</li>
                        <button className="login" onClick={() =>{
                         btnNameReact === "Login" ? setbtnNameReact("Logout") :
                         setbtnNameReact("Login") ;
                        }}>{btnNameReact}</button>
                   </ul>
              </div>
         </div>
    )
}


export default Header;