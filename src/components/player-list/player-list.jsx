import { useState } from "react";
import PlayerForm from "../player-form/player-form";
import Player from "../player/player";

function PlayerList() {
    const [players, setPlayers] = useState([]);

  return (
    <div className="container">
      <div className="header">
        <PlayerForm players={players} setPlayers={setPlayers}/>
      </div>
      {players.length > 0 
        ? 
        <div className="player-header">
          <div className="player-title">Игрок:</div>
          <div className="player-title">Очки:</div>
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
