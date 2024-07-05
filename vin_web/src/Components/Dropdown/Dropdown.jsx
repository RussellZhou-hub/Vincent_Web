import './Dropdown.css';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import MenuItems from "../MainMenu/MainMenu.jsx"

const Dropdown = ({ submenus, isShowDropdown,depthLevel }) => {

    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return (
     <ul className={`dropdown ${dropdownClass} ${isShowDropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems 
        items={submenu}
        depthLevel={depthLevel}
        />
      ))}
     </ul>
    );
   };
   
   export default Dropdown;