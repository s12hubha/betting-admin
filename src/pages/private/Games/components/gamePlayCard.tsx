import GameTimer from "../../../../components/common/GameTimer";
import ParticipantTableCard from "./ColorAndNumberGame/ParticipantTableCard";
import TopGameCard from "./ColorAndNumberGame/TopGameCard";
import useColorAndNumberGameManagementhook from "./useColorGameManagementhook";

type Props = {
  id: string | undefined;
  gameTime:number
};

const ColorAndNumberGamePage = ({ id,gameTime }: Props) => {
  const {
    AllNumbersArr,
    AllColorArr,
    maxAmountColor,
    maxAmountNumber,
    particpantList,
    startTimer,
    setStartTimer
  } = useColorAndNumberGameManagementhook(id,gameTime);

  return (
    <div className="p-4">
       <GameTimer startTimer={startTimer} setStartTimer={setStartTimer} time={gameTime}/>
      <TopGameCard
        AllColorArr={AllColorArr}
        AllNumbersArr={AllNumbersArr}
        maxAmountColor={maxAmountColor}
        maxAmountNumber={maxAmountNumber}
        id={id}
      />
      <ParticipantTableCard particpantList={particpantList} />
    </div>
  );
};

export default ColorAndNumberGamePage;
