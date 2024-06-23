import { Dispatch } from "@reduxjs/toolkit"
import api from "../../core/httpInterceptor"
import { APIConstants } from "../../shared/constants"
import { setIsLoading } from "../../shared/slices/auth"
import { setActiveRoom, setGameList, setRoomData, } from "../../shared/slices/games"
import { AppDispatch } from "../store/strore"
import { setParticipiantList } from "../../shared/slices/colorGame"


export const getGameList=()=>async(dispatch:Dispatch)=>{
    try{    
    dispatch(setIsLoading(true))
     const res= await api.get(APIConstants?.getAllGames)
     dispatch(setGameList(res?.data?.gameList))
     dispatch(setIsLoading(false))

    }
    catch(error){
   console.log(error)
    }
}

export const getUsersByRoomId=(payload:{roomId:string})=>async(dispatch:Dispatch)=>{
    try{
      dispatch(setIsLoading(true))
      const res= await api.post(APIConstants?.getAllParticipants,payload)
      dispatch(setParticipiantList(res?.data?.participantOrderList))
      dispatch(setIsLoading(false))
    }
    catch(err){
        dispatch(setIsLoading(false))
         console.log(err)
    }
}
export const getRooms=()=>async(dispatch:AppDispatch)=>{
    try{    
    dispatch(setIsLoading(true))
     const res= await api.get(APIConstants?.getActiveRoom)
     console.log(res?.data )
    if(res?.data?.success){
    
        dispatch(setRoomData({roomlist:[res?.data?.activeRoom],gameTime:new Date(res?.data?.activeRoom?.startTime)}))
        dispatch(setActiveRoom({activeRoom:res?.data?.activeRoom?._id}))
        dispatch(getUsersByRoomId({
            "roomId":res?.data?.activeRoom?._id
        }))
        return res?.data?.activeRoom as string
    }
     dispatch(setIsLoading(false))

    }
    catch(error){
    dispatch(setIsLoading(false))
   console.log(error)
    }
}

export const submitWinnerColorGame=(payload)=>async(dispatch:Dispatch)=>{
  const res= await api.post(APIConstants?.submitColorGameResult,payload)
  console.log(res)
}