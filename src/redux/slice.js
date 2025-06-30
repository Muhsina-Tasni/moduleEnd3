import { createSlice } from "@reduxjs/toolkit";

const saveSlice =  JSON.parse(localStorage.getItem('slice'))
 ||
 {
    user:null,
    isAuthenticated:false
}
const slice= createSlice ({
    name:'auth',
    initialState:saveSlice,

    reducers:{
        // to understand the logined person and store local storage
        login:(state,action)=>{ 
            const {userName,role} =action.payload
                state.isAuthenticated = true,
                state.user={userName,role}
                localStorage.setItem('slice',JSON.stringify(state))
            
        },
        // for the logout and remove from local storage
        logout:(state)=>{
            state.isAuthenticated =false
            state.user= null
            localStorage.removeItem('slice')
        }
    }
})
    
export const { login,logout } = slice.actions;
export default slice.reducer