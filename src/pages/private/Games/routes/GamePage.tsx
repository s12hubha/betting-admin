import React from "react";
import useGameManagementhook from "../components/useGameManagementhook";
import PageWrapperWithButton from "../../../../components/layouts/mainContainer";
import GameCard from "../components/gameCard";


const GamePage = () => {
  const { gameList,handleGameRoom, customsocket } = useGameManagementhook();
  return (
    <PageWrapperWithButton
      title="Games"
      showButton
      buttonTitle="Add Games"
      buttonHandler={() => {}}
      buttonClassName="bg-[#fe5e37] text-white"
    >
      <div className="grid ld:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 bg-white h-full p-4">
        {gameList.map((games) => (
          <GameCard game={games} onCardClick={(id)=>handleGameRoom(id)}  />
        ))}
      </div>
    </PageWrapperWithButton>
  );
};

export default GamePage;
