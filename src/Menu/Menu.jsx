import React from "react";
import style from "./Menu.module.css"
import {Link} from "react-router-dom";


const Menu = ({menu}) => {

    const menuNew = menu.map((i,index) => <li className={index?0:style.active}><Link to={i.link}>{i.name}<span
        className={style.count}> {i.count}</span></Link></li>);

    return (
        <div className={style.wrapper}>
            <div className={style.menu}>
                <h5 className={style.vitrina}>Витрина книг </h5>
                <hr className={style.line}/>
                {<ul>
                    {menuNew}
                </ul>}
                <h5><Link to="/mainpage/termsofuse">Правила пользования</Link></h5>
                <h5><Link to="/mainpage/contractoffer">Договор оферты</Link></h5>
            </div>

        </div>
    )
}
export default Menu;