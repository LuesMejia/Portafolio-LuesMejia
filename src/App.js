import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Conocimientos from "./pages/Conocimientos";  

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <Router>
<Navbar dark={dark} setDark={setDark} />
<main className="main-content">
  <Routes>
    <Route path="/" element={<Home dark={dark} setDark={setDark}/>} />
    <Route path="/Proyectos" element={<Projects dark={dark} setDark={setDark}/>} />
    <Route path="/Acerca-De" element={<About dark={dark} setDark={setDark}/>} />
    <Route path="/Contacto" element={<Contact dark={dark} setDark={setDark} />} />
     <Route path="/Conocimientos" element={<Conocimientos dark={dark} setDark={setDark} />} />
  </Routes>
  <Footer dark={dark} />
</main>


    </Router>
  );
}
