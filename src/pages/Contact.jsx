import React from "react";

function Contact() {
  const styles = {
    container: {
      backgroundColor: "#D4BBA0",
      minHeight: "80vh",
      padding: "2rem",
      textAlign: "center",
    },
    title: {
      color: "#111827",
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    input: {
      padding: "0.5rem",
      margin: "0.5rem 0",
      border: "1px solid #111827",
      borderRadius: "4px",
      width: "100%",
      maxWidth: "400px",
    },
    button: {
      backgroundColor: "#111827",
      color: "#F7F7F5",
      padding: "0.7rem 1.2rem",
      border: "none",
      borderRadius: "5px",
      marginTop: "1rem",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contáctame</h1>
      <form>
        <input type="text" placeholder="Tu nombre" style={styles.input} />
        <input type="email" placeholder="Tu correo" style={styles.input} />
        <textarea placeholder="Tu mensaje" style={styles.input} rows="4" />
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
