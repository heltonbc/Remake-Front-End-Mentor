import React from "react";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.scss";
import posts from "./components/posts";

const App = () => {
    return (
        <div className="App">
            <Navigation />
            <Home />
            <Cards posts={posts} />
            <Footer />
        </div>
    );
};

export default App;
