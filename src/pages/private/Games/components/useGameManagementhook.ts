import  { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/store/strore'
import { getGameList} from '../../../../redux/action/game.action'
import { useNavigate } from 'react-router-dom'
import { ClientRoutesConstants } from '../../../../shared/constants'
import SocketConnector from '../../../../socket-connection'
import { UrlUtils } from '../../../../utilis/http-utils'
import AuthService from '../../../../core/service/auth.service'



export let customsocket:SocketConnector
const useGameManagementhook = () => {
    const dispatch = useAppDispatch()
    const navigate=useNavigate()
    const {gameList}= useAppSelector(state=>state?.game)

    useEffect(()=>{
      
        dispatch(getGameList())
       
    },[])

    const handleGameRoom=(id:string)=>{
      const socketInstance = SocketConnector.getInstance(
        UrlUtils.getBaseUrl(),
        AuthService.getSession()?.access_token||""
      );
    
      socketInstance.connect();
      customsocket=socketInstance
     
     navigate(ClientRoutesConstants?.games+`/${id}`)
    } 
  return (
    {gameList,handleGameRoom,customsocket}
  )
}

export default useGameManagementhook