import PopupWithForm from './PopupWithForm';

function DeletQuestionPopup(props){
    function hendleSumbit(e){
        e.preventDefault();
        props.onCardDelete(props.card)
    }
    // console.log(props.onClose)
    return(
          <PopupWithForm
          name = 'popup_delet'
          isOpen={props.isOpen}
          onSubmit={hendleSumbit}
          onClose ={props.onClose}
          title='Вы уверены?'
          text= 'Да'
          />
    )
}
export default DeletQuestionPopup;