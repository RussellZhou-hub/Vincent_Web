import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import { menuItems } from "../MainMenu/MainMenu.jsx";
import MenuItems from "../MainMenu/MainMenu.jsx";
import './Navbar.css';

const Navbar = () => {

    const depthLevel = 0;

    return (
     <nav>
      <ul className="menus">
       {menuItems.map((menu, index) => {
        return (
         <li className="menu-items" key={index} depthLevel={depthLevel}>
          <MenuItems items={menu} depthLevel={depthLevel} />
         </li>
        );
       })}
      </ul>
     </nav>
    );
   };
   
export default Navbar;