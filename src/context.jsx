import React, { useState, useContext, useEffect } from "react";

const url = "https://dummyjson.com/products/search?q=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [demo, setDemo] = useState("testing");
    return (
        <AppContext.Provider value={{ demo }}>{children}</AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
