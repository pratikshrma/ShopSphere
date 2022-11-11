import React, { useState, useContext, useEffect, useReducer } from "react";
import { useAsyncError } from "react-router-dom";

const url = "https://dummyjson.com/products/search?q=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("a");
    const [result, setResult] = useState([]);
    const [cart,setCart]=useState([])

    const addItemToCart=(id)=>{
        setCart([...cart,id])
    }

    const fetchResult = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${url}${searchTerm}`);
            const data = await res.json();
            setResult(data.products)
            setLoading(false)
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchResult();
    }, [searchTerm]);

    return (
        <AppContext.Provider value={{ loading, setSearchTerm, result,cart,addItemToCart}}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
