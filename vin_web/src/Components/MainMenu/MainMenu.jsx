import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Article from '../Article/Article';
import Login from '../Login/Login.jsx';
import Dropdown from "../Dropdown/Dropdown.jsx";
import { useState, useEffect, useRef } from "react";

import './MainMenu.css';

const MenuItems = ({ items, depthLevel }) => {

    const [isShowDropdown, setIsShowDropdown] = useState(false);

    const toRoute="/"+items.title;

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            // 检查一个下拉菜单是否打开，然后检查被点击的DOM节点是否在下拉菜单之外，然后我们关闭下拉菜单
         if (isShowDropdown && ref.current && !ref.current.contains(event.target)) {
            setIsShowDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [isShowDropdown]);

       const onMouseEnter = () => {
        window.innerWidth > 960 && setIsShowDropdown(true);
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 960 && setIsShowDropdown(false);
       };

 return (

  
  <li className="menu-items" ref={ref}
   onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}
  >
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
        <Link to={toRoute}>{items.title}</Link>
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
     title: "Login"
    }
   ];