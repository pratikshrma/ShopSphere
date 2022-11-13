import React, { useState, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const url = "https://dummyjson.com/products/search?q=";

const initialState = {
    cart: [
        {
            id: 1,
            image: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            name: "iPhone 9",
            price: "477.8",
            amount:1
        },
    ],
    total: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("a");
    const [result, setResult] = useState([]);

    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };
    const addItemToCart = (id, name, price, image) => {
        dispatch({ type: "ADDITEM", payload: { id, name, price, image } });
    };
    const increase=(id)=>{
        dispatch({type:"INCREASE",payload:id})
    }
    const decrease=(id)=>{
        dispatch({type:"DECREASE",payload:id})
    }
    const remove=(id)=>{
        dispatch({type:"REMOVE",payload:id})
    }

    
    useEffect(()=>{
        dispatch({type:'GET_TOTAL'})
    },[state.cart])



    const fetchResult = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${url}${searchTerm}`);
            const data = await res.json();
            setResult(data.products);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchResult();
    }, [searchTerm]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                increase,
                decrease,
                remove,
                loading,
                setSearchTerm,
                result,
                addItemToCart,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
