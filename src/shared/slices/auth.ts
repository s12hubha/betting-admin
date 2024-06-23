import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserDetails } from "../../models/interfaces/auth";
interface IUser {
  isLoading:boolean,
  user:IUserDetails,
  isSideBarOpen:boolean
}
const initialState:IUser={
  isLoading:false,
  user:{isAuthenticated:false},
  isSideBarOpen:true
}
const authSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
     setIsLoading:(state,action: PayloadAction<boolean>)=>{
       state.isLoading = action?.payload;
     },
     setUser:(state,action:PayloadAction<IUserDetails>)=>{
       state.user=action?.payload
     },
     removeUser:(state)=>{
      state.user={isAuthenticated:false}
     } ,
     setIsSidebarOpen:(state,action:PayloadAction<boolean>)=>{
    state.isSideBarOpen=action?.payload
     }
    }
})
export const { setIsLoading,setUser,removeUser,setIsSidebarOpen } = authSlice.actions


export default authSlice.reducer