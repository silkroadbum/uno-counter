import React from 'react'

function Player({players, setPlayers, player, id}) {
  const [showTextFiled, setShowTextFiled] = React.useState(false);
  const inputRef = React.useRef(null);

  const showField = () => {
    setShowTextFiled(!showTextFiled);
  };

  const addScore = () => {
    setPlayers([...players.slice(0, id), {name: player.name, scores: player.scores + Number(inputRef.current.value)} ,...players.slice(id + 1)])
    setShowTextFiled(!setShowTextFiled);
  }

  return (
    <li className='player-list__item'>
        {player.name}
        <span className='player-list__block'>
          <span className='player-list__scores'>{player.scores}</span>
          {showTextFiled 
            ? <span>
                <input ref={inputRef} className='player-list__text-field' name='value' type='text'/>
                <button onClick={addScore} className='player-list__add_value' type='button'>Добавить</button>
              </span>
            : <button onClick={showField} className='player-list__button'>Добавить очки</button>
          }
        </span>
    </li>
  );
}

export default Player;
