import RestaurantCard from "./RestaurantCard";
import resOBJ from "../utils/mockData";
import {useState} from "react";
const Body = ()=>{
     //State Variable- Super poweful Variable
      
     const [listOfRestaurants, setListOfRestaurant] = useState(resOBJ);


    return(
         <div className="body">
              <div className="filter">
                <button className="filter-btn" onClick={() =>{
                   const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.4
                   );
                   setListOfRestaurant(filteredList);
                }} >Top Rated Restaurant</button>
              </div>
              <div className="res-container">
                   {
                        listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>

                         ))
                   }
              </div>
         </div>
    ) 
}

export default Body;