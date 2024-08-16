import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import './layouts.css'
import './style.css'


const Layouts:React.FC = ()=>{
    return (
        <>
          <div className="layout grid-container">
            <div className="header"><Header/></div>
            <div className="sideBar"><SideBar/></div>
            <div className="main"><Outlet/></div>
            <div className="footer"><Footer/></div>
          </div>
        </>
    )
}

export default Layouts