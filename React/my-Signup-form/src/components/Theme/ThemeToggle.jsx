import React, { useContext } from "react";
import {DataContext } from "../../context/DataContext";
 
const ThemeToggle = () => {
    const {isDarkTheme, ToggleTheme} = useContext(DataContext);

    return (
         <button className="theme-toggle" onClick={ToggleTheme}>

         swistch to {isDarkTheme ? "Light" :"Dark"}Theme

         </button>

    );
};

export default ThemeToggle;