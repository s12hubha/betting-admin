import { Dispatch } from "@reduxjs/toolkit";
import api from "../../core/httpInterceptor";
import { APIConstants } from "../../shared/constants";
import { setIsLoading } from "../../shared/slices/auth";
import { IGetUserListPayload } from "../../models/interfaces/user-managment";

export const getUserAction=(payload:IGetUserListPayload)=>async(dispatch:Dispatch)=>{
try{
    dispatch(setIsLoading(true));
  const res= await api.post(APIConstants?.userList,payload)
  console.log(res)
  dispatch(setIsLoading(false));
}
catch(err) {
 console.log(err)
 dispatch(setIsLoading(false));
}
}