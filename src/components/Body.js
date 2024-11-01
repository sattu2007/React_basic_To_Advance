import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import useOfflineStatus from "../utils/useOfflineStatus";
import { Link } from "react-router-dom";
const Body = ()=>{
     //State Variable- Super poweful Variable

     const [listOfRestaurants, setListOfRestaurant] = useState([]);
     const [filterdRestaurant,setFilterdRestaurant] = useState([])
     const [searchText,setSearchText] = useState("");

     
     useEffect(()=>{
         fetchData();
     }, [])

     const fetchData = async() => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.22810&lng=75.77870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

          );

          const json = await data.json();
          console.log(json);
          setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilterdRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     const onlineStatus = useOfflineStatus();
     console.log(onlineStatus);
     if(onlineStatus === false) {
          return (
               <>
                <h1>Connection Error</h1>
                <h3>Please check your internet connection and try again!!!</h3>
               </>

          );

     }

     return listOfRestaurants.length ===0 ? <Shimmer/> : (
         <div className="body">
              <div className="filter flex">
               <div className="search m-4 p-4">
                  <input type="text" className=" border border-solid border-black"  value={searchText} onChange ={(e) =>{
                    setSearchText(e.target.value);
                  }}/>  
                  <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() =>{
                    const filterRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilterdRestaurant(filterRestaurant);
                  }}>Search</button> 
               </div>
               <div className="m-4 p-4 flex items-center ">
               <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() =>{
                   const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.4
                   );
                   setListOfRestaurant(filteredList);
                }} >Top Rated Restaurant</button>
               </div>
                
              </div>
              <div className="res-container flex flex-wrap">
                   {
                        filterdRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to ={"/restaurants/"+restaurant.info.id}>
                         <RestaurantCard  resData={restaurant}/>
                         </Link>

                         ))
                   }
              </div>
         </div>
    ) 
}

export default Body;