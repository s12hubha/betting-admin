import { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/store/strore'
import { getRooms, getUsersByRoomId } from '../../../../redux/action/game.action'
import { useParams } from 'react-router-dom'
import { setActiveRoom } from '../../../../shared/slices/games'
import { customsocket } from './useGameManagementhook'



const useRoomManagmenthook = () => {
   
    const {roomList,activeRoom,gameTime}= useAppSelector(state=>state?.game)
    const {id}=useParams()
    const dispatch= useAppDispatch()


    useEffect(()=>{
     
      if(id){
       dispatch(getRooms())
     
      //  setActiveRoom(activeRoom)
      }
      return ()=>  customsocket.disconnect()
    },[])
    
    // const changePage=(page:number|string)=>{
    //   setRoomPayload(prev=>({...prev,pageNumber:typeof(page)==="number"?prev?.pageNumber+page:page==="next"?prev?.pageNumber+1:prev?.pageNumber-1}))
    // }
    const handleActiveRoom=(id:string,startTime:Date)=>{

      dispatch(setActiveRoom({activeRoom:id,gameTime:startTime}))
     dispatch(getUsersByRoomId({roomId:"6453098a-5c02-43bc-8198-8a0a5253503d"}))
    }
  return (
     {roomList,activeRoom,gameTime,handleActiveRoom} 
  )
}

export default useRoomManagmenthook