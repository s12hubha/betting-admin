import { UserRoles } from "../enum";

interface extraObject {
    closeHandler?:()=>void
}
type IextraObject= extraObject & { [key: string]: unknown };
export interface IModalProps {
    isOpen:boolean,
    bodyType:string,
    size?:string,
    extraObject:IextraObject,
    title:string
  }

export interface IGetUserListPayload{
    pageNumber:number,pageSize:number,role:UserRoles
}