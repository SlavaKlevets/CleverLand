import React from "react";
import style from "./Element.module.css";
import star from  "../images/Star 1.png";
import image3 from "../images/Icon_Other.png";
import {Link} from "react-router-dom";
import star2 from "../images/Star 2 .png";

const Element=({img,grade,name,author,booking})=>{

    const srade=[];
    for (let i = 0; i <= grade; i++) {
        srade.push(i);
    }

    const grade1 =srade.map(i=>{if(i!==0)
    {return <img className={style.star} src={star} alt=""/>}
    else if(i===0){{<span>еще нет оценок</span>}}
    })

    return(
        <Link to="/pagebook"><div className={style.elementwrapper} data-test-id='card'>
           <div className={style.wrapImage}>{img?<img className={style.imagesCard} src={img} alt=""/>:
                    <div className={style.cats}><img className={style.catsImg} src={image3} alt=""/></div>}</div>
           <div>{grade1}<img className={style.star} src={star2} alt=""/></div>
                <h5 className={style.cardName}>{name}</h5>
                <h5 className={style.authorName}>{author}</h5>
                {booking?<button className={style.but3}>Занята</button>:<button className={style.but}>Забронитовать</button>}


        </div>
        </Link>
    )
};
export default Element;