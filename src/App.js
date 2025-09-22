import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <Router>
<Navbar dark={dark} setDark={setDark} />
<main className="main-content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Proyectos" element={<Projects />} />
    <Route path="/Acerca-De" element={<About />} />
    <Route path="/Contacto" element={<Contact />} />
  </Routes><Footer dark={dark} />
</main>


    </Router>
  );
}
