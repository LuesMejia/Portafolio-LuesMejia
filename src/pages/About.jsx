import React from "react";

export default function About() {
  const styles = {
    section: {
      backgroundColor: "#F7F7F5",
      padding: "4rem 2rem",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      color: "#111827",
      marginBottom: "2rem",
    },
    content: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    textBox: {
      flex: "1 1 300px",
      color: "#111827",
      fontSize: "1.1rem",
      lineHeight: "1.6",
    },
    list: {
      marginTop: "1rem",
      paddingLeft: "1.2rem",
    },
    listItem: {
      marginBottom: "0.5rem",
      backgroundColor: "#E7D8C9",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      fontWeight: "500",
    },
    image: {
      flex: "1 1 300px",
      backgroundColor: "#D4BBA0",
      height: "250px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#111827",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Sobre Mí</h2>
      <div style={styles.content}>
        <div style={styles.textBox}>
          <p>
            Soy desarrollador/a con experiencia en construir interfaces y
            productos escalables.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Frontend: React, JS</li>
            <li style={styles.listItem}>Diseño: Figma, prototipado</li>
            <li style={styles.listItem}>Infraestructura: Netlify, Vercel</li>
            <li style={styles.listItem}>Idiomas: Español (nativo), Inglés (avanzado)</li>
            <li style={styles.listItem}>Años de Experiencia: 3 años en el rubro del desarrollo</li>
          </ul>
        </div>
        <div style={styles.image}>Imagen</div>
      </div>
    </section>
  );
}
