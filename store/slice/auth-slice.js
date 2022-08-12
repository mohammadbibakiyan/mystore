import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{auth:false,role:null},
    reducers:{
        loginF(state,action){
            state.role=action.payload.role;
            state.auth=true;
            localStorage.setItem("auth",JSON.stringify(state))
        },
        logoutF(state){
            state.auth=false;
            state.role=null;
            localStorage.removeItem("auth")
        },
        setAuthFromLocalStorage(state,action){
            state.auth=action.payload.auth;
            state.role=action.payload.role;
        },
    }
})

export const {loginF,logoutF,setAuthFromLocalStorage}=authSlice.actions;
export default authSlice.reducer;