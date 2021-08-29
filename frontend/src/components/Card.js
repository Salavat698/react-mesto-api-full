import React from 'react';
import backet from '../images/backet.svg'
import { CurrentUserContext} from '../contexts/CurrentUserContext';

function Card (props){

  function handleCardLike(){
    props.onCardLike (props.dataCards);
  }

  function handleDeleteClick (){
    props.onCardDelete (props.dataCards);
  }

  function handleClick() {
    props.onCardClick(props.dataCards);
  } 
  
  const userId = React.useContext(CurrentUserContext)
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.dataCards.owner._id === userId._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `element__backet ${isOwn ? 'element__backet_active' : ' element__backet_hidden'}`
  );


    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.dataCards.likes.some(i => i._id === userId._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `element__like ${isLiked ? 'element__like_active' : ' '}`
  );

    return(
        
        <div className="directors__item">
        <div className="element__header">
          <img className="element__image" 
           alt={props.name}
           src={props.dataCards.link}
           onClick={handleClick}
           />
          <img className={`${cardDeleteButtonClassName}`}  
          src={backet} 
          alt="Корзина для удаление фото-карточки"
          onClick ={handleDeleteClick}
          />
        </div>
        <div className="element__footer">
          <div className="element__place-travel">{props.dataCards.name}</div>
          <div className="element__likes-group">
            <button 
            className={`${cardLikeButtonClassName}`} 
            type="button" 
            aria-label="Like" 
            onClick={handleCardLike}
             />
            <div className= 'element__likes-click'>{props.dataCards.likes.length}</div>
          </div>
        </div>
      </div>
        
    )
}
export default Card