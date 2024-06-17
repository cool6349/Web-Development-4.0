import React, { Children, createContext, useState } from "react";

export const DataContext = createContext();
   
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isDarkTheme,setDarkTheme] = useState(false);

    const saveData = (newData) => {
        setData([...data, newData]);
        localStorage.setItem("userData", JSON.stringify([...data.newData]));

    };


    const fetchData = () => {
        const saveData = localStorage.getItem("userData");
        if (saveData)
            {
                setData(JSON.paerse(savedData));

            }
    };

    const ToggleTheme = () => {
        setDarkTheme(!isDarkTheme);

    };

 return (
    <DataContext.Provider
    
    value={{ data, saveData, fetchData, isDarkTheme,ToggleTheme}}
    >
    {children}
    </DataContext.Provider>
 );
};