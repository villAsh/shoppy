import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//creating data slice where we store our products
const dataSlice = createSlice({
    name : 'data',
    initialState : [],
    reducers : {
        Products_data(state,action){
           return state = action.payload;
        },
        single_product(state,action){
            state = action.payload;
        }
    }
});

//creating thunk function to call async api
export function fetchData(){
    return async function fetchDataThunk(dispatch){
        try{
            const res = await axios.get('http://localhost:3030/products');
            const data = await res.data;
            // console.log("data",data)
            dispatch(Products_data(data));
        }catch(error){
            console.log(error);
        }
    }
}

export function fetchSingleData(id){
    return async function fetchSingleDataThunk(dispatch){
        try{
            const res = await axios.get(`https://mocki.io/v1/a3503fbe-03be-4e74-a268-f8ab6a17e362/products/${id}`);
            const data = await res.data;
            // console.log("data",data)
            dispatch(single_product(data));
        }catch(error){
            console.log(error);
        }
    }
}
//exporting reducers and actions
export default dataSlice.reducer;
export const {Products_data,single_product} = dataSlice.actions;