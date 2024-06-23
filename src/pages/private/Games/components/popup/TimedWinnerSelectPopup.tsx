
import { useState } from 'react'
import ColorButton from '../../../../../components/common/colorButton/ColorButton'
import { GameDataItem } from '../../../../../models/interfaces/games'
import TopGameCard from '../ColorAndNumberGame/TopGameCard'
import { useAppDispatch } from '../../../../../redux/store/strore'
import { submitWinnerColorGame } from '../../../../../redux/action/game.action'
import { Button } from 'flowbite-react'
type IExtraObjProps={
AllColorArr:GameDataItem[],
    AllNumbersArr:GameDataItem[],
    maxAmountColor?:string | number | undefined,
    maxAmountNumber?:string | number | undefined,
    activeRoom:string
}
type Props = {
    closeModal:()=>void,
    extraobject:IExtraObjProps|object
}

const TimedWinnerSelectPopup = ({closeModal,extraobject}: Props) => {
    const [winnerColorBoardObj,setWinnerColorBoardObj]=useState([
        {text:"Red",style:'bg-[#ff1f1f] ',contentClassName:"[box-shadow:inset_0px_-8px_0px_#AA0000,_0px_-8px_0px_#5a0101]",isActive:false},
        {text:"Green",style:'bg-[#046c4e]',contentClassName:"[box-shadow:inset_0px_-8px_0px_#0baa00,_0px_-8px_0px_#015a05]",isActive:false},
        {text:"Violet",style:'bg-[#6d28d9]',contentClassName:"[box-shadow:inset_0px_-8px_0px_#4c00aa,_0px_-8px_0px_#39015a]",isActive:false},
    ])
    const [winnerNumberBoardObj,setWinnerNumberBoardObj]=useState([
        {text:"0",isActive:false},
        {text:"1",isActive:false},
        {text:"2",isActive:false},
        {text:"3",isActive:false},
        {text:"4",isActive:false},
        {text:"5",isActive:false},
        {text:"6",isActive:false},
        {text:"7",isActive:false},
        {text:"8",isActive:false},
        {text:"9",isActive:false},
    ])
    const dispatch= useAppDispatch()
    const {AllColorArr,AllNumbersArr,maxAmountColor,maxAmountNumber}=extraobject as IExtraObjProps
    const handleActiveColor=(selectedColor:string)=>{
       
     // Find the index of the selected color in the array
     const selectedIndex = winnerColorBoardObj.findIndex(color => color.text === selectedColor);
     
     // If the selected color is not found, return
     if (selectedIndex === -1) return;
 
     // Get the selected color object
     const selectedColorObj = winnerColorBoardObj[selectedIndex];
 
     // Get the currently active colors
     const activeColors = winnerColorBoardObj.filter(color => color.isActive);
     
     // If the selected color is already active, deactivate it
     if (selectedColorObj.isActive) {
         setWinnerColorBoardObj(prevState => {
             const updatedArr = [...prevState];
             updatedArr[selectedIndex] = { ...selectedColorObj, isActive: false };
             return updatedArr;
         });
         return;
     }
 
     // If there are already two active colors and the selected color is not one of them, return
     if (activeColors.length === 2 && !activeColors.some(color => color.text === selectedColor)) {
         return;
     }
 
     // If the selected color is "Red" or "Green", and the other color is active, return
     if ((selectedColor === "Red" && activeColors.some(color => color.text === "Green")) ||
         (selectedColor === "Green" && activeColors.some(color => color.text === "Red"))) {
         return;
     }
  
     // Update the state to activate the selected color
     setWinnerColorBoardObj(prevState => {
         const updatedArr = prevState.map((color, index) => {
             if (index === selectedIndex) {
                 return { ...color, isActive: true };
             } else if (color.isActive && activeColors.length === 2) {
                 return { ...color, isActive: false };
             }
             return color;
         });
        
         return updatedArr;
     });
      
    }
    const handleActiveNumber=(selectedNumber:string)=>{
        setWinnerNumberBoardObj(prevState=>prevState.map(numObj=>{if(numObj?.text===selectedNumber){return {...numObj,isActive:true}} else return {...numObj, isActive:false}}))
    }
    const submitResult=()=>{
        const payload={
            "roomId":"activeRoom" in extraobject && extraobject?.activeRoom,
            "winColor":winnerColorBoardObj?.filter(col=>col?.isActive).map(cold=>cold?.text),
            "winNumber":Number(winnerNumberBoardObj?.find(col=>col?.isActive)?.text)
            }
            dispatch(submitWinnerColorGame(payload))
       }
  return (
    <div className=''>
        <TopGameCard
        AllColorArr={AllColorArr}
        AllNumbersArr={AllNumbersArr}
        maxAmountColor={maxAmountColor}
        maxAmountNumber={maxAmountNumber}
      />
      {/* <button className="threed-button " role="button"><a href="#">Button 33</a></button> */}
     <div className='grid grid-cols-3 w-full place-items-center mt-7 bg-gray-100 py-2'>
       {winnerColorBoardObj.map(colObj=><ColorButton text={colObj?.text} onClick={(color)=>handleActiveColor(color)} className={colObj?.style} key={colObj?.text} contentClassName={colObj?.contentClassName} isActive={colObj?.isActive} />)}
     </div>
     <div className='flex justify-center w-full mt-7 numberbtn bg-gray-100 py-2 gap-2 mb-4'>
       {winnerNumberBoardObj.map(numObj=><button className={`big-button ${numObj?.isActive?"translate-x-[0em] translate-y-[0.75em] before:[transform:translate3d(0,_0,_-1em)] before:[box-shadow:0_0_0_2px_#79ba9c,_0_0.25em_0_0_#79ba9c]":""}`} key={numObj?.text} onClick={()=>handleActiveNumber(numObj?.text)}>{numObj?.text}</button>)}
     </div>
     <Button className='mx-auto my-4' onClick={()=>submitResult()} color="blue">Submit</Button>
    </div>
  )
}

export default TimedWinnerSelectPopup