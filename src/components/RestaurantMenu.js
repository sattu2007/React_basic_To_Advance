import Shimmer from "./Shimmer";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./ReataurantCategory";

const RestaurantMenu = () =>{
      const [showIndex, setShowIndex] = useState(null);
      const[resInfo,setResInfo] = useState(null);   
      
      const {resId} = useParams();
    //   console.log(resId);
      useEffect(()=>{
        fetchMenu();
       },[]);

       const fetchMenu = async() =>{
        const data = await fetch(
          MENU_API  + resId)
        const json = await data.json();
        setResInfo(json.data); 
        // console.log(json);
       }
    if(resInfo === null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[2]?.card?.card;
    //  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards);


     const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(c => c?.card?.card?.["@type"] === 
      
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      // console.log(categories);




    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} 
              -{costForTwoMessage}</p>
              {/* categories accordion */}

              {categories.map((category, index) =>
              <RestaurantCategory key={category?.card?.card.title} 
              data={category?.card?.card}
              showItem ={index == showIndex && true}
              setShowIndex = {() => setShowIndex(index)}
              />)}
        </div>
    )
}

export default RestaurantMenu;