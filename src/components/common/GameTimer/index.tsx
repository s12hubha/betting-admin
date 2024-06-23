import React from 'react'


type Props = {
    startTimer:boolean,
    setStartTimer:(value: boolean | ((prevVar: boolean) => boolean)) => void,
    time:number
}

const GameTimer = ({startTimer,setStartTimer,time}: Props) => {
  const [countDown, setCountDown] = React.useState(0);

console.log({time})
  React.useEffect(() => {
    let timerId:any;

    if (startTimer) {
      setCountDown(60 * time);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [startTimer,time]);

  React.useEffect(() => {
    if (countDown < 0 && startTimer) {
      console.log("expired");
      setStartTimer(false);
      setCountDown(0);
    }
  }, [countDown, startTimer]);


  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  return (
    <div>
      <div>
        Time: {minutes}:{seconds}
      </div>
    </div>
  )
}

export default GameTimer