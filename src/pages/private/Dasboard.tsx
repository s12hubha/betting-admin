import { useEffect } from 'react'
import { socket } from '../../redux/action/auth.action'





const Dashboard = () => {
  
    useEffect(()=>{
       
        if(socket){

            socket.on("connect",()=>console.log("connected"))
           
        }
       
    },[])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard