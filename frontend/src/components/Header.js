import React from 'react';
import headerLogo from '../images/header-logo.svg'
import { Link ,withRouter} from 'react-router-dom'; 
function Header(props){

  

        function signOut(){
            localStorage.removeItem('token');
            props.history.push('/sign-in');
    }

    return(
        <>
    
            <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                    
                        <ul className="menu__box">
                        <div className='menu__wrapper'>
                            <div className='header__email'>{props.userData}</div>
                            <Link className=' header__exit header__exit_position' onClick={signOut} to="/sign-in">Выйти</Link>
                        </div>
                            
                        </ul>
             </div>
                    <header className="header">
                    <img className="header__logo" src={headerLogo} alt="Логотип сайта путешествие" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                        </label>
                    <div className='header__wrapper'>
                        <div className='header__email'>{props.userData}</div>
                        <Link className='header__exit' onClick={signOut} to="/sign-in">Выйти</Link>
                    </div>

                </header>     
                  
        </>
    );
}
export default withRouter(Header);