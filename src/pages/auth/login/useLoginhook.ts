import React, { useState } from 'react'
import { SignInAction } from '../../../redux/action/auth.action'
import { useAppDispatch } from '../../../redux/store/strore'

import { setIsLoading } from '../../../shared/slices/auth'
import { useNavigate } from 'react-router-dom'



const useLoginhook = () => {
    const [loginDetails,setLoginDetails]= useState({username:"",password:""})
    const dispatch = useAppDispatch()
    const navigate= useNavigate()


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e?.target||{}
 setLoginDetails(prev=>({...prev,[name]:value}))
    }


    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
       dispatch(setIsLoading(true))
      try{
         await dispatch(SignInAction(loginDetails,navigate))
         
      dispatch(setIsLoading(false))
    }
      
      catch(err){
        console.log(err)
      }
    }
  return{ loginDetails,handleChange,handleSubmit}
}

export default useLoginhook