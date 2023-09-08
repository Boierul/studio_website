import {Routes, Route, useLocation} from "react-router-dom";

import {AnimatePresence} from "framer-motion";

import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Products from "./components/Products.jsx";
import NotFound from "./components/NotFound";

function App() {
    const location = useLocation();


    return (
        <>
            <Navbar/>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
