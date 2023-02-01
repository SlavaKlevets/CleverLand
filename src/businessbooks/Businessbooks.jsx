import React, {useState} from "react";
import style from "./Businessbooks.module.css";
import Element from "../element/Element";
import List from "../list/List";
import image from "../images/image.png";
import square from "../images/icon-square-four.svg";
import stroke from "../images/Stroke.png";

const Businessbooks=()=>{

    const [butClick,setButClick]=useState(true);

    const element=[
        {
            img:image,
            grade:4,
            name:"Грокаем алгоритмы. Иллюстрированное пособие для програ...",
            author:"Адитья Бхаргава, 2019",
            booking:true
        },
        {
            img:image,
            grade:2,
            name:"Грокаем алгоритмы. Иллюстрированное ",
            author:"Адитья Бхаргава, 2019",
            booking:true
        },
        {
            img: image,
            grade:3,
            name:"Грокаем алгоритмы. ",
            author:"Адитья Бхаргава, 2019",
            booking:true
        },
        {
            img: image,
            grade:4,
            name:"Грокаем алгоритмы. Иллюстрированное пособие для програ...",
            author:"Адитья Бхаргава, 2019",
            booking:true
        },
        {
            img:"",
            grade:0,
            name:"Грокаем алгоритмы. Иллюстрированное пособие для програ...",
            author:"Адитья Бхаргава, 2019",
            booking:true
        },{
            img: image,
            grade:4,
            name:"Грокаем алгоритмы. Иллюстрированное ",
            author:"Адитья Бхаргава, 2019",
            booking:true
        },{
            img: image,
            grade:4,
            name:"Грокаем алгоритмы. ",
            author:"Адитья Бхаргава, 2019",
            booking:false
        },{
            img: image,
            grade:4,
            name:"Грокаем алгоритмы. Иллюстрированное пособие для програ...",
            author:"Адитья Бхаргава, 2019",
            booking:true
        },{
            img: image,
            grade:4,
            name:"Грокаем алгоритмы. ",
            author:"Адитья Бхаргава, 2019",
            booking:false
        },{
            img: image,
            grade:4,
            name:"Грокаем алгоритмы. Иллюстрированное пособие для програ...",
            author:"Адитья Бхаргава, 2019",
            booking:true
        }
    ];

    const elementNew=element.map(i=><Element img={i.img} grade={i.grade} name={i.name} author={i.author} booking={i.booking}/>)
    const list=element.map(i=><List img={i.img} grade={i.grade} name={i.name} author={i.author} booking={i.booking}/>)

    return(
        <div className={style.wrapper}>
            <div className={style.listButton}>
                <input className={style.listInput} placeholder="Поиск книги или автора" type="text"/>
                <div className={style.poisk}><span className="material-symbols-outlined">search</span></div>
                <div className={style.rating}>
                    <span className={style.spanrat1}> </span>
                    <span className={style.spanrat2}> </span>
                    <span className={style.spanrat3}> </span>
                    <span className={style.spanrat4}> </span>
                    <span className={style.spanrat5}> </span>
                    <span className={style.spanrat6}> </span>
                    <span className={style.spanReting}>По рейтингу</span></div>
                <div data-test-id='button-menu-view-window' className={style.list} onClick={()=>{setButClick(true)}}>
                    <span> <img src={square} alt=""/></span>
                </div>
                <div data-test-id='button-menu-view-list' className={style.tile} onClick={()=>{setButClick(false)}}>
                    <span className={style.span1}> </span>
                    <span className={style.span2}> </span>
                    <span className={style.span3}> </span>
                </div>
            </div>
            <div className={style.elem}>
                {butClick?elementNew:list}
            </div>
        </div>
    )
}
export default Businessbooks;