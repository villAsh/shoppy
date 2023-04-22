import { createSlice } from "@reduxjs/toolkit";

//creating cart slice
const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        add(state,action){
            const added = state.find((item) => item.id === action.payload.id);
            if(added){
                alert("The Product is already in your cart!!");
            }else{
                state.push(action.payload);
            }
        },
        remove(state,action){
            return state = state.filter((item) => item.id !== action.payload)
        },
        clear(state){
            return state = [];
        },
        plus(state,action){
            const product = state.find((item) => item.id === action.payload);
            product.qty++;
        },
        minus(state,action){
            const product = state.find((item) => item.id === action.payload);
            if(product.qty === 1){
                return state = state.filter((product) => product.id !== action.payload);
            }else{
                product.qty--;
            }
        }
    }
});

//exporting reducers and actions
export default cartSlice.reducer;
export const {add,remove,clear,minus,plus} = cartSlice.actions;