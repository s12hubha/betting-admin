import  { useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/store/strore'
import { getGameList} from '../../../../redux/action/game.action'






const useColorAndNumberGameManagementhook = (id:string|undefined,gameTime:number) => {
    const dispatch = useAppDispatch()

    const [startTimer,setStartTimer]= useState(false)
  useEffect(()=>{
    setStartTimer(true)
  },[id,gameTime])
    const {gameData,maxAmountColor,maxAmountNumber,particpantList}= useAppSelector(state=>state?.ColorAndNumberGame)
    const AllColorArr=gameData.filter(data=>data?.group==="color")
    const AllNumbersArr=gameData.filter(data=>data?.group==="number")
    useEffect(()=>{
        dispatch(getGameList())
    },[])


 
  return (
    {
  
    AllNumbersArr,
    AllColorArr,
    maxAmountColor,
    maxAmountNumber,
    particpantList,
    startTimer,
    setStartTimer
}
  )
}

export default useColorAndNumberGameManagementhook