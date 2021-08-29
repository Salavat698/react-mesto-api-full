import PopupWithForm from './PopupWithForm';
import React from 'react';

function AddPlacePopup (props){
    const cardsNameRef = React.useRef();
    const cardsLinkRef = React.useRef();
    
    function handleSubmit (e){
        e.preventDefault();
        props.onAddPlace({
            name :cardsNameRef.current.value,
            link :cardsLinkRef.current.value,
        }
            
        );
    }
    return(
        <PopupWithForm text = 'Загрузить фото' onSubmit={handleSubmit}  name ="popup_add-cards "  title ="Новое место" isOpen={props.isOpen} onClose={props.onClose}>
            <input ref={cardsNameRef} id="description-card" className="popup__input popup__input-description " type="text" placeholder="Название" required />
            <span id="description-card--error" className="popup__input-error" />
            <input ref={cardsLinkRef} className="popup__input popup__input-images" id="url-card" type="url" placeholder="Ссылка на картинку" required />
            <span id="url-card--error" className="popup__input-error" />
        </PopupWithForm> 
    )
}
export default AddPlacePopup ;