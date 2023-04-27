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
        login(state,action){
            state.user = action.payload;
        },
        logout(state,action){
            state.user = null;
        }
    }
});

export default userSlice.reducer;
export const {register,logout,login} = userSlice.actions;