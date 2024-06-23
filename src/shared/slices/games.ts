import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGameInitalState,  Igames } from "../../models/interfaces/games";



const intitalState:IGameInitalState={
    gameList:[],
    roomList:[],
    activeRoom:"",
    totalRooms:0,
    gameTime:0
}
const gameSlice= createSlice({
    name:"games",
    initialState:intitalState,
    reducers:{
        setGameList:(state,action:PayloadAction<Igames[]>)=>{
          state.gameList=action?.payload
        },
        setRoomData:(state,action)=>{
         
          state.roomList=action?.payload?.roomlist;
          const today = new Date();
          let dif:number = (today.valueOf() - action?.payload?.gameTime?.valueOf());
dif = Math.round((dif / 1000) / 60);
          state.gameTime=  dif==0?3:dif
          console.log("difff=>>>>>>",{dif},action?.payload?.gameTime)
        },
        setActiveRoom:(state,action:PayloadAction<{activeRoom:string,gameTime?:Date}>)=>{
          state.activeRoom=action?.payload?.activeRoom;
          const today = new Date();
          let dif:number = (today.valueOf() - action?.payload?.gameTime!.valueOf());
dif = Math.round((dif / 1000) / 60);
state.gameTime=  dif==0?3:dif
          
        },
        updateRoom:(state,action)=>{ 
          state.activeRoom=action?.payload?._id;
          state.roomList=[action?.payload,...state.roomList];
          const today = new Date();
          let dif:number = (today.valueOf() - action?.payload?.gameTime!.valueOf());
dif = 3-Math.round((dif / 1000) / 60);
          state.gameTime=  dif
        },
        
        
    }
})

export const {setGameList,setRoomData,setActiveRoom,updateRoom } = gameSlice.actions

export default gameSlice.reducer