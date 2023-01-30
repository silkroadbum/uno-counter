import { useContext } from "react";

import PlayerForm from "../player-form/player-form";
import Player from "../player/player";

import { AppContext } from "../../App";

function PlayerList() {
  const {players, setPlayers} = useContext(AppContext);

  const resetCount = () => {
    setPlayers((prev) => prev.map((obj) => ({...obj, scores: 0})))
  };

  return (
    <div className="container">
      <div className="header">
        <PlayerForm />
      </div>
      {players.length > 0 
        ? 
        <div className="player-header">
          <div className="player-title">Игрок:</div>
          <div className="player-title player-title__scores">Очки:</div>
          <button className="button button--reset" onClick={resetCount} type="button">Сбросить очки</button>
        </div>
        : ''
      }
      
      <ul className="player-list">
        {players && players.map((player, i) => (
          <Player key={i + player.name} player={player} id={i}/>)
        )}
      </ul>
    </div>
   
  )
}

export default PlayerList;
