function PopupWithForm (props){
    return(
        
          <div className={`popup popup${props.name} ${props.isOpen ? "popup_active":""}` }>
            <form  onSubmit={props.onSubmit} className="popup__container  " method="POST" name={props.name}    >
              <button className="popup__close" type ="button" onClick ={ props.onClose }/>
              <h3 className="popup__title">{props.title}</h3>
              {props.children}
              <button type="submit" onClick ={ props.onClose } className="popup__save-btn" >{props.text}</button>
            </form>
          </div>  
        
    )
}
export default PopupWithForm