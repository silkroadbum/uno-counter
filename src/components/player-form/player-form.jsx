import React from 'react'

function PlayerForm({players, setPlayers}) {
    const [formData, setFormData] = React.useState({name: '', scores: 0});

    const onClickButton = () => {
        if (formData.name !== '') {
            setPlayers([...players, formData]);
            setFormData({name: '', scores: 0});
        } 
    }

    const onChangeInput = (evt) => {
        setFormData({...formData, name: evt.target.value});
    }

  return (
    <form className='player-form'>
        <input onChange={onChangeInput} value={formData.name} name='name' type='text' placeholder='Введите имя игрока' required/>
        <button onClick={onClickButton} type='button'>Добавить</button>
    </form>
  );
}

export default PlayerForm;
