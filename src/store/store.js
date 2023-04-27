import { configureStore,combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import dataReducer from "../Features/dataSlice"
import cartReducer from '../Features/cartSlice'
import userReducer from '../Features/userSlice'
//creating store, the global object where our data is stored.

//this will give us access to a function that combine our reducers into an object of key/value pair.
const reducer = combineReducers({
    data : dataReducer,
    cart : cartReducer,
    user : userReducer,
});

//config file for the persist reducer where storage is localStorage.
const persistConfig = {
    key : 'cart',
    storage,
    blacklist : ['data','user']
}

//this will give us the persisted reducer.
const persistedReducer = persistReducer(persistConfig,reducer);


const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false,
    }),
});

export default store;