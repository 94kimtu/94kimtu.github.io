import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Record from "./pages/Record";
import Identity from "./pages/Identity";
import Aside from "./components/Aside";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photo" element={<Photo />} />
                <Route path="/record" element={<Record />} />
                <Route path="/identity" element={<Identity />} />
            </Routes>
            <Footer />
            <Aside />
        </BrowserRouter>
    );
}

export default App;
