import { CDN_URL } from "../utils/constants";


const styleCard = {
    backgroundColor: "#f0f0f0",
};
const RestaurantCard = ({resData}) =>{
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,areaName} = resData.info;
//     console.log(resData.info.name);
     return(
          <div className="res-card" style={styleCard}>
               <img 
               className="res-logo"
               alt="res-logo"
               src={CDN_URL+ 
                    cloudinaryImageId}
               />
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating} star</h4> 
               <h4>{costForTwo}</h4>
               <h4>{areaName}</h4>

          </div>
     );
}

export default RestaurantCard;