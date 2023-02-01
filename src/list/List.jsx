import React from "react";
import style from "./List.module.css"
import image from "../images/image.png";
import star from "../images/Star 1.png";
import image3 from "../images/Icon_Other.png";

const List = ({img, grade, name, author, booking}) => {

    const srade = [];
    for (let i = 0; i <= grade; i++) {
        srade.push(i);
    }

    const grade1 = srade.map(i => {
        if (i !== 0) {
            return <img className={style.starList} src={star} alt=""/>
        } else if (i === 0) {
            {
                <span>еще нет оценок</span>
            }
        }
    })

    return (
        <div className={style.wrapperList}>
            <div>{img?<img className={style.imageList} src={img} alt=""/>:<div className={style.cats}><img className={style.catsImg} src={image3} alt=""/></div>}</div>
            <div className={style.vid}>
                <h5 className={style.nameList}>{name}</h5>
                <h5 className={style.authorList}>{author}</h5>
                <div className={style.starButList}>
                    <div className={style.star}>{grade1}</div>
                        {booking ? <button className={style.butList}>Занята</button>:<button className={style.butList}>Забронитовать</button>}
                </div>
            </div>
        </div>
    )
}
export default List;