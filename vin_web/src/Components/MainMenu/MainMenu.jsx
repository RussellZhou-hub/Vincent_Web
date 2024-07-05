import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Article from '../Article/Article';
import About from '../About/About.jsx';
import Dropdown from "../Dropdown/Dropdown.jsx";
import { useState } from "react";
import './MainMenu.css';

const MenuItems = ({ items, depthLevel }) => {

    const [isShowDropdown, setIsShowDropdown] = useState(false);

 return (
  <li className="menu-items">
   {items.submenu ? (
    <>
     <button type="button" aria-haspopup="menu"
        aria-expanded={isShowDropdown ? "true" : "false"}
        onClick={() => setIsShowDropdown((prev) => !prev)}
     >
      {items.title}{" "}
      {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
     </button>
     <Dropdown depthLevel={depthLevel}
        submenus={items.submenu} 
        isShowDropdown={isShowDropdown}
     />
    </>
   ) : (
    <li className="menu-items-link">
        <Link to="/">{items.title}</Link>
    </li>
   )}
  </li>
 );
};

export default MenuItems;

export const menuItems = [
    {
     title: "Home"
    },
    {
     title: "article",
     submenu: [
        {
         title: "web design"
        },
        {
         title: "game development",
         submenu: [
            {
                title: "Unreal Engine",
                submenu:[
                    {
                        title:"animation"
                    },
                    {
                        title:"rendering"
                    }
                ]
            },
            {
                title: "Unity",
            },
            {
                title: "Rage",
            },
         ]
        },
        {
         title: "project star"
        }
       ]
    },
    {
     title: "About"
    }
   ];