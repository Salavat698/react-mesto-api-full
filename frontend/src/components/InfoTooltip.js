import imgSuccess from '../images/img-success.svg'
import imgFail from '../images/img-fail.svg'
import React from 'react';

function InfoTooltip(props){
 
    return(
   
    //  он щас окрывает по стеиту но если прилетит фалс он не заменить контент на ошибку
        <div className={`infotooltip ${props.stateOpenPopup  ? 'infotooltip_active' : ''}`}>
            <button className='infotooltip__close' onClick ={ props.onClose }></button>
            <div className='infotooltip__popup'>
                    
                <img  
                    className='infotooltip__images' 
                    src={props.isSuccess  ? imgSuccess: imgFail} 
                    alt="Оповещенние">
                </img>
                <p  
                    className='infotooltip__text'>
                    {props.isSuccess ?'Вы успешно зарегистрировались!':'Что-то пошло не так! Попробуйте ещё раз.'}
                </p>
            </div>
           
        </div>
    
    
    )

}
export default InfoTooltip;