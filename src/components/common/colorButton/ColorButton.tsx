import React from 'react'

type Props = {
    text:string,
    onClick:(color:string)=>void,
    className:string,
    contentClassName:string,
    isActive:boolean
}

const ColorButton = ({text,onClick,className,contentClassName,isActive}: Props) => {
    
  return (
    <button onClick={()=>onClick(text)} className={`new_button ${className} ${!isActive?"[box-shadow:-6px_-20px_35px_#ffffff,_-6px_-10px_15px_#ffffff,_-20px_0px_30px_#ffffff,_6px_20px_25px_rgba(0,_0,_0,_0.2)]":"[transform:translate3d(0px,_0px,_0px)]"}`}>
        
    <div className={`new_button__content ${!isActive?`${contentClassName}`:"[transform:translate3d(0px,_0px,_0px)]"} `}>
      
      <p className={`new_button__text font-medium ${!isActive?"[transform:translate3d(0px,_-4px,_0px)]":"[transform:translate3d(0px,_0px,_0px)]"}`}>{text}</p>
    </div>
  </button>
  )
}

export default ColorButton