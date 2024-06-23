import { ParticipantColors, ParticipantNumbers } from "../enum"

export interface Igames{  
    "_id": string,
    "createdAt":string,
    "updatedAt":string,
    "isActive": boolean,
    "isDeleted": boolean,
    "name": string,
    "__v": 0    
}
export interface IRoom{
        activeRoom: string | undefined    
        "_id": string,
        "status": string,
        "startTime": string,
        "endTime": string,
        "winColor": string[]
}
interface IUserData{
    "_id": string,
    "displayName": string,
    "mobileNo": string
}
export interface IParticipant {
    
        "_id": string,
        "roomId": string,
        "bitAmount": number,
        "bitNumber": ParticipantNumbers,
        "contractCount":number,
        "actualAmount": number,
        "userData":IUserData,
        "color":ParticipantColors,
        "customId":string

}


export interface IGameInitalState{
gameList:Igames[],
roomList:IRoom[],

totalRooms:number,
activeRoom:string|undefined,
gameTime:number
}

export type GameDataItem = {
    filter: string | number,
    filterKey: "color" | "bitNumber",
    RedColorList?: IParticipant[],
    GreenColorList?: IParticipant[],
    VioletColorList?: IParticipant[],
    ZeroNumberList?: IParticipant[],
    OneNumberList?: IParticipant[],
    TwoNumberList?: IParticipant[],
    ThreeNumberList?: IParticipant[],
    FourNumberList?: IParticipant[],
    FiveNumberList?: IParticipant[],
    SixNumberList?: IParticipant[],
    SevenNumberList?: IParticipant[],
    EightNumberList?: IParticipant[],
    NineNumberList?: IParticipant[],
    group: "color" | "number",
    listKey: string,
    bitAmountTotal: number
}
export interface IColorAndNumberGameInitialState{
    particpantList:IParticipant[],
   gameData:GameDataItem[],
   maxAmountNumber:string | number | undefined,
   maxAmountColor:string | number | undefined
}
export interface IGetRoomPayload{
    "gameId":string,
    "pageNumber":number,
    "pageSize":number
    
}