import React from "react";
import s from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
                <img src="http://pluspng.com/img-png/the-beatles-png-the-beatles-by-andreza0406-the-beatles-by-andreza0406-900.png"/>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>log out</button></div>
                        :<NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>
    )
}

export default Header;