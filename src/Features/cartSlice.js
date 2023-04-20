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
            state.filter((item) => item.id !== action.payload.id)
        },
        clear(state,action){
            state = [];
        }
    }
});

//exporting reducers and actions
export default cartSlice.reducer;
export const {add,remove,clear} = cartSlice.actions;