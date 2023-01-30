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
      <div className='player-list__info'>
        <span className='player-list__name'>{player.name}</span>
        <span className='player-list__scores'>{player.scores}</span>
      </div>
        <span className='player-list__block'>
          {showTextFiled 
            ? <span className='player-list__wrapper'>
                <input ref={inputRef} className='player-list__text-field' name='value' type='number' placeholder='Число'/>
                <button onClick={addScore} className='button player-list__add_value' type='button'>
                  <img src='img/check.svg' className='player-list__icon' alt='Icon check' width={40}/>
                </button>
              </span>
            : <button onClick={showField} className='button player-list__button'>Добавить очки</button>
          }
        </span>
    </li>
  );
}

export default Player;
