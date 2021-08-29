import addVector from '../images/add-vector.svg'
import editButton from '../images/Edit-Button.svg'
import Card from './Card';
import React from 'react';
import { CurrentUserContext} from '../contexts/CurrentUserContext';



function Main (props){
  const translationUser = React.useContext(CurrentUserContext);

    return(
        <>
           <main className="page">
            <section className="profile">
              <div className="profile__top-avatar">
                <button className="profile__avatar-edit" type="button"  onClick={props.onEditAvatar} > 
                  <img className="profile__avatar" src={translationUser.avatar} alt="автарка автора" />
                </button>
              </div>
              <div className="profile__info">
                <div className="profile__header-info">
                  <h1 className="profile__name" >{translationUser.name}</h1>
                  <button className="profile__edit-btn" type="button"><img className="profile__icon" onClick={props.onEditProfile} src={editButton} alt="кнопка добавление автора" /></button>
                </div>
                <p className="profile__work">{translationUser.about}</p>
              </div>
              <button className="profile__add-btn" type="button" onClick={props.onAddPlace}><img src={addVector} alt="кнопка добавление фото" /></button>
            </section>
         
            <section className="elements">

                  <div className="element">
                      {Array.from(props.cards).map((item) => (
                          <Card 
                          key={item._id} 
                          dataCards = {item} 
                          onCardClick={props.onCardClick}
                          onCardLike ={props.onCardLike}
                          onCardDelete ={props.onCardDelete}
                          />
                        ))}
                  </div>
            </section>
          </main>
        </>
    )
}

export default Main;