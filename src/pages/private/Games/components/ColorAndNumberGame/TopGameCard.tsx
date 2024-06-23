

import AnimatedNumber from 'react-animated-numbers'
import { GameDataItem } from '../../../../../models/interfaces/games'


type Props = {
    AllColorArr:GameDataItem[],
    AllNumbersArr:GameDataItem[],
    maxAmountColor:string | number | undefined,
    maxAmountNumber:string | number | undefined,
    id:string|undefined
}

const TopGameCard = ({AllColorArr,AllNumbersArr,maxAmountColor,maxAmountNumber,id}: Props) => {
  
  return (
    <div>
     
      <div className="grid grid-cols-2">
      <div className="grid grid-cols-4 border border-t-0">
        <div className="grid place-items-center place-content-center">Total Users</div>
        {AllColorArr.map((colorObj)=>{
             const list = colorObj[colorObj?.listKey as keyof typeof colorObj];
             const length = Array.isArray(list) ? list.length : typeof list === 'string' ? list.length : undefined;
            return<div className="grid place-items-center place-content-center border-l">
            <div
              className={`w-16 h-16 perspective-1200  grid place-content-center  place-items-center rounded-full text-white`}
            >
              <div className={`w-full h-full absolute ${typeof colorObj?.filter==="string"&&colorObj?.filter?.toLowerCase()}-ball rounded-full ${maxAmountColor===colorObj?.filter&&"animate-bounce"} inset-0 text-white text-center z-10`}>
                <span className="w-full h-full absolute shadow-red-700 inset-0 grid place-items-center font-medium">
                <AnimatedNumber
      fontStyle={{ fontFamily: "Nunito", fontSize: 16,textAlign:"center" }}
      animateToNumber={length||0}
      includeComma
      className="justify-center"
      config={{ tension: 89, friction: 40 }}
      onStart={() => console.log("onStart")}
      onFinish={() => console.log("onFinish")}
      animationType={"calm"}
        />
                </span>
              </div>
            </div>
      
        </div>})}
      
        <div className="grid place-items-center place-content-center mt-2">₹:</div>
       {AllColorArr.map((colorObj)=> <div className="grid place-items-center place-content-center border-l"> <p className=" mt-2"> <AnimatedNumber
      fontStyle={{ fontFamily: "Nunito", fontSize: 16,textAlign:"center" }}
      animateToNumber={colorObj.bitAmountTotal||0}
      includeComma
      className="justify-center"
      config={{ tension: 89, friction: 40 }}
      onStart={() => console.log("onStart")}
      onFinish={() => console.log("onFinish")}
      animationType={"calm"}
        /></p></div>)}
      
        <div></div>
        <div className="col-span-3 text-center text-white border-t  bg-gradient-to-r from-red-500 to-orange-500">Colors</div>
      </div>
      <div className="grid grid-cols-10  pt-0">
      {AllNumbersArr.map(numObj=>{
        const list = numObj[numObj?.listKey as keyof typeof numObj];
        const length = Array.isArray(list) ? list.length : typeof list === 'string' ? list.length : undefined;
      
        return <div className=" text-center border">
        <p className={`font-medium border py-3 text-center bg-gradient-to-r ${maxAmountNumber===numObj?.filter&& "animate-ping"} from-blue-200 to-cyan-200 text-gray-800`}>{numObj?.filter}</p>
        {/* <p>{numObj[numObj?.listKey as keyof typeof numObj]?.length}</p> */}
         <AnimatedNumber
      fontStyle={{ fontFamily: "Nunito", fontSize: 16,textAlign:"center" }}
      animateToNumber={length||0}
      includeComma
      className="justify-center"
      config={{ tension: 89, friction: 40 }}
      onStart={() => console.log("onStart")}
      onFinish={() => console.log("onFinish")}
      animationType={"calm"}
        />
        <p className="mt-2">{numObj?.bitAmountTotal}</p>
      </div>})}
      <div className="col-span-10 text-center text-white border-t  bg-gradient-to-r from-red-500 to-orange-500">Numbers</div>
      </div>
      </div>
    </div>
  )
}

export default TopGameCard