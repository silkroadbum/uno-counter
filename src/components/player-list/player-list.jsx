import { useState } from "react";
import PlayerForm from "../player-form/player-form";
import Player from "../player/player";

function PlayerList() {
    const [players, setPlayers] = useState([]);

  return (
    <>
        <PlayerForm players={players} setPlayers={setPlayers}/>
        <ul className="player-list">
        {players && players.map((player, i) => <Player key={i + player.name} players={players} setPlayers={setPlayers} player={player} id={i}/>)}
        </ul>
    </>
   
  )
}

export default PlayerList;
