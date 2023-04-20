import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Features/dataSlice"
import cartReducer from '../Features/cartSlice'
//creating store, the global object where our data is stored.
const store = configureStore({
    reducer : {
        data : dataReducer,
        cart : cartReducer,
    }
});

export default store;