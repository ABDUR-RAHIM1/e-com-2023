import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalStateProvider = ({ children }) => {
    const [filterText, setFilterText] = useState("")
    const [cart, setCart] = useState([]) 
    const value = {
        filterText, setFilterText,
        cart, setCart,
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalStateProvider;
