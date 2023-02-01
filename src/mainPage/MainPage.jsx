import React from "react";
import style from "./MainPage.module.css";
import Menu from "../Menu/Menu";
import {Route, Routes} from "react-router-dom";
import List from "../list/List";
import Businessbooks from "../businessbooks/Businessbooks";
import Termsofuse from "../termsofuse/Termsofuse";
import ContractOffer from "../ contractOffer/ContractOffer";
import PageBook from "../pageBook/PageBook";

const MainPage=({menu})=>{
    return(
        <div className={style.body}>
            <Menu menu={menu}/>
            <div className={style.wrapper}>
                <Routes>
                    <Route path="/allbooks" element={<Businessbooks/>}/>
                    <Route path="/businessbooks" element={<Businessbooks/>}/>
                    <Route path="/detectives" element={<Businessbooks/>}/>
                    <Route path="/childrenbooks" element={<Businessbooks/>}/>
                    <Route path="/foreignliterature" element={<Businessbooks/>}/>
                    <Route path="/history" element={<Businessbooks/>}/>
                    <Route path="/classicliterature" element={<Businessbooks/>}/>
                    <Route path="/psychologybooks" element={<Businessbooks/>}/>
                    <Route path="/computerliterature" element={<Businessbooks/>}/>
                    <Route path="/cultureart" element={<Businessbooks/>}/>
                    <Route path="/scienceeducation" element={<Businessbooks/>}/>
                    <Route path="/nonfictionliterature" element={<Businessbooks/>}/>
                    <Route path="/referencebooks" element={<Businessbooks/>}/>
                    <Route path="/fantasy" element={<Businessbooks/>}/>
                    <Route path="/humorousliterature" element={<Businessbooks/>}/>
                    <Route path="/termsofuse" element={<Termsofuse/>}/>
                    <Route path="/contractoffer" element={<ContractOffer/>}/>
                    <Route path="/pagebook" element={<PageBook/>}/>
                </Routes>
            </div>
        </div>
    )
};
export default MainPage;