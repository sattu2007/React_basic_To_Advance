import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStroe = configureStore({
   reducer: {
    cart: cartSlice,
   }
});

export default appStroe;