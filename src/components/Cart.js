import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{

    const itemCart = useSelector((store) => store.cart.items);
    // console.log(itemCart);

    const dispatch = useDispatch();

    const handalItem =()=>{
        dispatch(clearCart());
        // console.log("Radhe Radhe");
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            
            <div className="w-6/12 m-auto ">
            <button className="p-2 m-2 bg-black text-white rounded-lg" 
            onClick={handalItem}>ClearCart</button>
            {itemCart.length ===0 && <h1>Cart is empty Add Items to the cart! </h1>}
            <ItemList items={itemCart} />
            </div>
        </div>
    )
}

export default Cart;