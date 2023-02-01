import './App.css';
import Header from './header/Header';
import {Link, Route, Routes} from "react-router-dom";
import Footer from "./footer/Footer";
import PageBook from "./pageBook/PageBook";
import MainPage from "./mainPage/MainPage";
import React from "react";
import style from "./pageBook/PageBook.module.css";


function App() {

    const menu = [
        {link: "/mainpage/allbooks", name: "Все книги", count: null},
        {link: "/mainpage/businessbooks", name: "Бизнес-книги", count: 14},
        {link: "/mainpage/detectives", name: "Детективы", count: 8},
        {link: "/mainpage/childrenbooks", name: "Детские книги", count: 14},
        {link: "/mainpage/foreignliterature", name: "Зарубежная литература", count: 2},
        {link: "/mainpage/history", name: "История", count: 5},
        {link: "/mainpage/classicliterature", name: "Классическая литература", count: 12},
        {link: "/mainpage/psychologybooks", name: "Книги по психологии", count: 11},
        {link: "/mainpage/computerliterature", name: "Компьютерная литература", count: 54},
        {link: "/mainpage/cultureart", name: "Культура и искусство", count: 5},
        {link: "/mainpage/scienceeducation", name: "Наука и образование", count: 2},
        {link: "/mainpage/nonfictionliterature", name: "Публицистическая литература", count: 0},
        {link: "/mainpage/referencebooks", name: "Справочники", count: 10},
        {link: "/mainpage/fantasy", name: "Фантастика", count: 12},
        {link: "/mainpage/humorousliterature", name: "Юмористическая литература", count: 8}
    ];

    //const route=menu.map(i=>{<Route path={i.link} element={<div className="ddd">{i.name}</div>}/>})

    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<MainPage menu={menu}/>}/>
                    <Route path="/mainpage/*" element={<MainPage menu={menu}/>}/>
                    <Route path="/pagebook" element={<PageBook/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
