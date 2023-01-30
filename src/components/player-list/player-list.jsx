import { useState } from "react";
import PlayerForm from "../player-form/player-form";
import Player from "../player/player";

function PlayerList() {
  const [players, setPlayers] = useState([]);

  const resetCount = () => {
    setPlayers((prev) => prev.map((obj) => ({...obj, scores: 0})))
  };

  return (
    <div className="container">
      <div className="header">
        <PlayerForm players={players} setPlayers={setPlayers}/>
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
          <Player key={i + player.name} players={players} setPlayers={setPlayers} player={player} id={i}/>)
        )}
      </ul>
    </div>
   
  )
}

export default PlayerList;
