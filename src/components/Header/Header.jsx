import React from 'react';
import hed from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={hed.header}>
            <img
                alt=""
                src='https://media1.thehungryjpeg.com/thumbs2/ori_3677396_q5cbvbf4baarpcuhwydcmjmhnylw0c9nybicjg5o_bat-mascot-sport-logo-design.png'
            />
            <div className={hed.loginBlock}>
                {props.isAuth
                    ? (<div>{props.login} - <button onClick={props.logout}>Log out</button></div>)
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;
