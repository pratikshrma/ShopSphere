import React from "react";
import ProductList from "../components/ProductList";
import Title from "../components/Title";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";
const Home = () => {
    const { searchTerm } = useGlobalContext();
    return (
        <main className="mainBack">
            <Title />
            hello testing from replit ok got it hello makde some more changes
            {/* <SearchForm /> */}
            {searchTerm != "" ? <ProductList /> : ""}
        </main>
    );
};

export default Home;
