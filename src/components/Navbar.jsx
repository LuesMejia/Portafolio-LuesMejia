import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  const styles = {
    navbar: {
      backgroundColor: dark ? "#111827" : "#F7F7F5",
      color: dark ? "#F7F7F5" : "#111827",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    links: {
      display: "flex",
      gap: "1rem",
    },
    link: {
      textDecoration: "none",
      color: dark ? "#F7F7F5" : "#111827",
      fontWeight: "500",
    },
    button: {
      background: "none",
      border: "none",
      color: dark ? "#F7F7F5" : "#111827",
      fontSize: "1.2rem",
      cursor: "pointer",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={{ fontWeight: "bold" }}>MiLogo</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/Proyectos" style={styles.link}>Proyectos</Link>
        <Link to="/Acerca-De" style={styles.link}>Acerca De</Link>
        <Link to="/Contacto" style={styles.link}>Contacto</Link>
        <button style={styles.button} onClick={() => setDark(!dark)}>
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
