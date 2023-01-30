import {useState, useContext} from 'react'
import { AppContext } from '../../App';

function PlayerForm() {
    const [formData, setFormData] = useState({name: '', scores: 0});
    const {players, setPlayers} = useContext(AppContext);

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
        <input className='player-form__input' onChange={onChangeInput} value={formData.name} name='name' type='text' placeholder='Введите имя игрока' required/>
        <button className='button button--add-player' onClick={onClickButton} type='button'>Добавить игрока</button>
    </form>
  );
}

export default PlayerForm;
