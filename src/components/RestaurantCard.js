import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const RestaurantCard = ({resData}) =>{
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,areaName} = resData.info;
    
    const {LoggedInUeser} = useContext(UserContext);
//     console.log(LoggedInUeser);

     return(
          <div className="res-card m-4 p-4 w-[220px] h-[450px] rounded-lg bg-gray-100 hover:bg-gray-400 h-200"> 
               <img 
               className="rounded-lg h-56 w-60"
               alt="res-logo"
               src={CDN_URL+ 
                    cloudinaryImageId}
               />
               <h3 className="font-bold py-4 text-lg">{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating} star</h4> 
               <h4>{costForTwo}</h4>
               <h4>{areaName}</h4>
               <h4>{LoggedInUeser}</h4> 

          </div>
     );
}

export const WithPromotedLabel = (RestaurantCard) =>{
     return (props) =>{
          return (
               <div>
                    <h1>Promoted</h1>
                    <RestaurantCard {...props}/>
               </div>
          )
     }
}

export default RestaurantCard;