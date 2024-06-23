
import { IRoom } from "../../../../models/interfaces/games";

type Props = {
  roomList: IRoom[];
  handleActiveRoom:(id:string,startTime:Date)=>void,
  activeRoom:string|undefined
};

const RoomList = ({ roomList, activeRoom,handleActiveRoom }: Props) => {
    console.log({activeRoom})
//   useEffect(() => {
//     const roomContainer = document.getElementById("roomlist");
//     roomContainer!.addEventListener("scroll", handleScroll);
//     return () => roomContainer!.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleScroll = () => {
//     const roomContainer = document.getElementById("roomlist");
//     const scrollHeight = roomContainer!.scrollHeight;
//     const currentHeight =
//      roomContainer!.scrollTop + roomContainer!.offsetHeight;
   
//     console.log(scrollHeight,currentHeight)
//     if (
//       Math.ceil(currentHeight)===scrollHeight
//     ) {
//       changePage(1);
//     }
//   };
  return (
    <div>
        <div className="w-full py-5 bg-black text-white text-center">
            <p>Rooms</p>
        </div>
        <div id="roomlist" className="overflow-y-auto h-[75vh] space-y-3 p-2 custom-scrollbar">
        
          {roomList?.map((room, index) => (
            <div className={`text-center py-3 w-full hover:cursor-pointer  border ${room?._id===activeRoom?"bg-[#fe5e37] text-white":"text-black"}`} onClick={()=>handleActiveRoom(room?._id,new Date(room?.startTime))}>
              {index + 1}
            </div>
          ))}
        </div>
    </div>
  );
};

export default RoomList;
