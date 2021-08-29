import PopupWithForm from './PopupWithForm';
import React from 'react';
import { CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup (props){
    const [name , setName ] = React.useState('')
    const [description , setDescription ] = React.useState('')

    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    }, [currentUser]);


    function handleNameChange(e) {
        setName(e.target.value);
      }
    
    function handleAboutChange(e) {
        setDescription(e.target.value);
      }

      
    function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
          name,
          about: description,
        });
      }
   
    return(
        <PopupWithForm   
        text = 'Сохранить' 
        onSubmit={handleSubmit} 
        name ="popup_profile "  
        title ="Редактировать профиль"
        isOpen={props.isOpen} 
        onClose={props.onClose}>
            <input
                onChange={handleNameChange}
                value={name || ''}
                id="name-input" 
                className="popup__input"
                type="text" name="name" 
                placeholder="Имя"
                required minLength={2} 
                maxLength={40} 
            />
            <span id="name-input--error" className="popup__input-error" />
            <input
                onChange={handleAboutChange}
                value={description || ''}
                id="work-input"
                className="popup__input "
                type="text" name="work"
                placeholder="О себе" 
                required minLength={2}
                maxLength={200} 
            />
            <span id="work-input--error" className="popup__input-error" />
        </PopupWithForm>
    )
}
export default EditProfilePopup;
