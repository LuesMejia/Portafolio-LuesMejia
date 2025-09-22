import React from "react";

export default function Footer({ dark }) {
  const styles = {
    footer: {
      backgroundColor: dark ? "#111827" : "#F3EDE7",
      color: dark ? "#F7F7F5" : "#111827",
      textAlign: "center",
      padding: "2rem",

    },
  };

  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Mi Sitio — Hecho con ❤️
    </footer>
  );
}
