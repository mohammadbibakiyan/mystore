import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart-slice";
import authReducer from "./slice/auth-slice"

const store=configureStore({
    reducer:{cart:cartReducer,auth:authReducer}
});

export default store;