function ImagePopup(props){
    return(
      <div className= {`popup popup_preview ${props.card.link  ? "popup_active":""}` }>
        <div className="popup__container-preview" method="POST" name="popup-container">
          <button className="popup__close popup__close_preview" type="button" onClick={props.onClose}/>
          <figure className="preview">
            <img className="preview__img" alt={props.card.name} src={props.card.link} />
            <figcaption className="preview__signature">{props.card.name}</figcaption>
          </figure>
        </div>
      </div>
    )
}
export default ImagePopup