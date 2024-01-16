
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
// import Login from "./pages/Auth/Login";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
