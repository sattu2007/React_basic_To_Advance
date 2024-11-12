import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOfflineStatus from "../utils/useOfflineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOfflineStatus();
  

  const {LoggedInUeser}= useContext(UserContext);
  // console.log(LoggedInUeser);

  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
          <Link to="/cart">Cart -({cartItem.length} Item)</Link>
             </li>
          <button 
          className="login" 
          onClick={() =>{
            btnNameReact === "Login" 
            ? setBtnNameReact("Logout") 
            :setBtnNameReact("Login");
          }}>{btnNameReact}
          </button>
          <li className="px-4 font-bold">{LoggedInUeser}</li>
        </ul>
      </div>

    </div>
  );
};

export default Header;