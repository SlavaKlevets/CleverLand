import React from "react";
import style from "./Footer.module.css";
import face from "../images/Facebook.svg";
import insta from "../images/insta.svg";
import vk from "../images/Vk.svg";
import In from "../images/In.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <hr className={style.hrFooter}/>
            <div className={style.wrapperFooter}>
                <div className={style.pravo}>© 2020-2023 Cleverland. Все права защищены.</div>
                <div className={style.social}>
                    <Link to="/"><img className={style.face} src={face} alt=""/></Link>
                    <Link to="/"><img className={style.insta} src={insta} alt=""/></Link>
                    <Link to="/"><img className={style.vk} src={vk} alt=""/></Link>
                    <Link to="/"><img className={style.in} src={In} alt=""/></Link>
                </div>
            </div>
        </div>

    )
}
export default Footer;