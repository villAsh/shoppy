import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        user : null,
        isLoggedIn : false
    },
    reducers : {
        logIn(state,action){
            state.user = action.payload
            state.isLoggedIn = true;
        },
        logout(state,action){
            state.user = null
            state.isLoggedIn = false
        }
    }
});

export default userSlice.reducer;
export const {logout,logIn} = userSlice.actions;