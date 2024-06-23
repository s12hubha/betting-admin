import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GameDataItem, IColorAndNumberGameInitialState, IParticipant  } from "../../models/interfaces/games";



const intitalState:IColorAndNumberGameInitialState={
    
    particpantList:[],
   gameData:[
    {filter:"Red",filterKey:"color",RedColorList:[],group:"color",listKey:"RedColorList",bitAmountTotal:0},
    {filter:"Green",filterKey:"color",GreenColorList:[],group:"color",listKey:"GreenColorList",bitAmountTotal:0},
    {filter:"Violet",filterKey:"color",VioletColorList:[],group:"color",listKey:"VioletColorList",bitAmountTotal:0},
    {filter:0,filterKey:"bitNumber",ZeroNumberList:[],group:"number",listKey:'ZeroNumberList',bitAmountTotal:0},
    {filter:1,filterKey:"bitNumber",OneNumberList:[],group:"number",listKey:'OneNumberList',bitAmountTotal:0},
    {filter:2,filterKey:"bitNumber",TwoNumberList:[],group:"number",listKey:'TwoNumberList',bitAmountTotal:0},
    {filter:3,filterKey:"bitNumber",ThreeNumberList:[],group:"number",listKey:'ThreeNumberList',bitAmountTotal:0},
    {filter:4,filterKey:"bitNumber",FourNumberList:[],group:"number",listKey:'FourNumberList',bitAmountTotal:0},
    {filter:5,filterKey:"bitNumber",FiveNumberList:[],group:"number",listKey:'FiveNumberList',bitAmountTotal:0},
    {filter:6,filterKey:"bitNumber",SixNumberList:[],group:"number",listKey:'SixNumberList',bitAmountTotal:0},
    {filter:7,filterKey:"bitNumber",SevenNumberList:[],group:"number",listKey:'SevenNumberList',bitAmountTotal:0},
    {filter:8,filterKey:"bitNumber",EightNumberList:[],group:"number",listKey:'EightNumberList',bitAmountTotal:0},
    {filter:9,filterKey:"bitNumber",NineNumberList:[],group:"number",listKey:'NineNumberList',bitAmountTotal:0},
],
   maxAmountColor:"",
   maxAmountNumber:0
    
}
const colorAndNumberGameSlice= createSlice({
    name:"color&NumberGame",
    initialState:intitalState,
    reducers:{
        setParticipiantList:(state,action:PayloadAction<IParticipant[]>)=>{
            state.particpantList=action?.payload   
            state.gameData=state.gameData.map(gameObj=>({
                ...gameObj,
                [gameObj.listKey as keyof typeof gameObj]:action.payload.filter(particpiant=>particpiant[gameObj.filterKey as keyof IParticipant]===gameObj?.filter),
                bitAmountTotal:action.payload.filter(particpiant=>particpiant[gameObj.filterKey as keyof IParticipant]===gameObj?.filter).reduce((a,b)=>a+=b?.bitAmount,0)
            })) as GameDataItem[]
            state.maxAmountColor=state.gameData
            .filter(gameObj => gameObj.group === "color")
            .find(filteredObj => {
              const list  = filteredObj[filteredObj.listKey as keyof typeof filteredObj];
              if (Array.isArray(list)) {
                return list.reduce((max, obj) => {
                    return obj.bitAmount > max.bitAmount ? obj : max;
                }, list[0]);
              } 
            })?.filter
           state.maxAmountNumber=state.gameData
           .filter(gameObj => gameObj.group === "number")
           .find(filteredObj => {
             const list  = filteredObj[filteredObj.listKey as keyof typeof filteredObj];
             if (Array.isArray(list)) {
               return list.reduce((max, obj) => {
                   return obj.bitAmount > max.bitAmount ? obj : max;
               }, list[0]);
             } 
           })?.filter
        },
        
    }
})

export const {setParticipiantList } = colorAndNumberGameSlice.actions

export default colorAndNumberGameSlice.reducer