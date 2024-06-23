import React from "react";
import { Igames } from "../../../../models/interfaces/games";
import gameBg from "../../../../assets/images/download.jpg";
type Props = {
  game: Igames;
  onCardClick:(id:string)=>void
};

const GameCard = ({ game,onCardClick }: Props) => {
  return (
    <div
      key={game?._id}
      style={{ backgroundImage: `url(${gameBg})` }}
      onClick={()=>onCardClick(game?._id)}
      className="border bg-no-repeat bg-cover h-fit hover:scale-105 transition-all hover:cursor-pointer text-white font-medium  py-5 px-3 text-center  rounded-xl"
    >
      {game?.name}
    </div>
  );
};

export default GameCard;
