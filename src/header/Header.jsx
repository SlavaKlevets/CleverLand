import React from 'react';
import style from './Header.module.css';
import logo from "../images/Vector.svg";
import logo2 from "../images/Cleverland.svg";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logoWrapper}>
                <div className={style.headerLogo}>
                    <Link to="/mainpage/businessbooks"><img className={style.logoSvg} src={logo} alt=""/></Link>
                </div>
                <Link to="/mainpage/businessbooks"><img className={style.cleverland} src={logo2} alt=""/></Link>
                <div className={style.menu}>
                    <div className={style.tile}>
                        <span className={style.span1}> </span>
                        <span className={style.span2}> </span>
                        <span className={style.span3}> </span>
                    </div>
                    <h3 className={style.biblioteca}>Библиотека</h3>
                </div>


            <h3 className={style.hello}>Привет, Иван!</h3>
            <div className={style.avatar}></div>
            </div>
        </div>
    )
}
export default Header;