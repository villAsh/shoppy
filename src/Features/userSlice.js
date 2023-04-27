import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        user : null,
        isLoggedIn : false
    },
    reducers : {
        register(state,action){
            state.user = action.payload;
        },
        logIn(state){
            state.isLoggedIn = true;
        },
        logout(state,action){
            state.user = null;
        }
    }
});

export default userSlice.reducer;
export const {register,logout,logIn} = userSlice.actions;