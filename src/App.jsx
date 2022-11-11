import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route exact path="/product/:id" element={<SingleProduct />}/>
                <Route path="*" element={<Error />}/>        
            </Routes>
        </Router>
    );
};

export default App;
