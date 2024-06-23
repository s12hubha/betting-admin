import  { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../redux/store/strore'
import { getUserAction } from '../../../../redux/action/user-management.action'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { openModal } from '../../../../shared/slices/common'
import ModalTypes from '../../../../utilis/modal-constant-util'
import { ClientRoutesConstants } from '../../../../shared/constants'
import { UserRoles } from '../../../../models/enum'
import { IGetUserListPayload } from '../../../../models/interfaces/user-managment'


const useUserManagementhook = () => {
    const {MODAL_BODY_TYPES}=ModalTypes
    const [userPayload,setUserPayload]= useState<IGetUserListPayload>({pageNumber:1,pageSize:10,role:UserRoles?.USER})
    const dispatch= useAppDispatch()
    const navigate= useNavigate()
    const location= useLocation()
    const params= useParams()
    const modalPaths=['create',"edit"]

    useEffect(()=>{
        dispatch(getUserAction(userPayload))
    },[])


    useEffect(()=>{
        const pathArr= location.pathname.split("/")
       
       const incluedsPath=modalPaths.find(path=>pathArr.includes(path))
       if(incluedsPath){
        openUserModal(incluedsPath)
       }
    },[location?.pathname])

    const handleUser=(id?:string)=>{
        id?navigate(`./edit/${id}`):navigate("./create")
    }

   const navigateBack=()=>{
    navigate(ClientRoutesConstants?.userManagement)
   }

  const changeTablePayload={
    changePage:(page:string|number)=>{
        if(typeof page==="string"){
            if(page=="next"){
             return  setUserPayload(prev=>({...prev,pageNumber:prev?.pageNumber+1}))
            }
            if(page==="back"){
              return setUserPayload(prev=>({...prev,pageNumber:prev?.pageNumber-1}))
            }
        }
        else {
            return setUserPayload(prev=>({...prev,pageNumber:page}))
        }
    },
    changeRole:(role:UserRoles)=>{
        return setUserPayload(prev=>({...prev,role}))
    }
  }

  
    const openUserModal=(type:string)=>{ 
        const title=type==="create"?"Create User":"Update User"
        const bodyType=type==="create"?MODAL_BODY_TYPES?.CREATE_USER:MODAL_BODY_TYPES?.UPDATE_USER
        const extraObject=type==="create"?{closeHandler:navigateBack}:{id:params?.id,closeHandler:navigateBack}
        dispatch(openModal({title, bodyType, extraObject}))
    }


  return (
   {handleUser,changeTablePayload}
  )
}

export default useUserManagementhook