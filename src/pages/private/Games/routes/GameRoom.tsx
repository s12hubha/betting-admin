
import PageWrapperWithButton from '../../../../components/layouts/mainContainer'
import ColorAndNumberGamePage from '../components/gamePlayCard'
import RoomList from '../components/roomList'
import useRoomManagmenthook from '../components/useRoomManagmenthook'



const GameRoom = () => {
     const {roomList,activeRoom,handleActiveRoom,gameTime}= useRoomManagmenthook()
     console.log({roomList})
  return (
    <PageWrapperWithButton title='Room' >
        <div className='grid grid-cols-12 h-full bg-white'>
         <div className='col-span-2 h-full '>
           <RoomList roomList={roomList} activeRoom={activeRoom} handleActiveRoom={handleActiveRoom}/>
         </div>
         <div className='col-span-10 border h-full'>
            <ColorAndNumberGamePage id={activeRoom} gameTime={gameTime}  />
         </div>
        </div>
    </PageWrapperWithButton>
  )
}

export default GameRoom